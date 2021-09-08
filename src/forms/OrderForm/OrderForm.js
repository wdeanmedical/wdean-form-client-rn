import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Images from '@local/assets'
import { View } from 'react-native'
import Overlay from 'react-native-modal-overlay'
import { sendOrder, getForm } from '../../state/actions'
import * as Constants from '../../constants/constants'
import OrderFormStyled from './order_form_styles'

class OrderForm extends Component {
  state = {
    message: 'enter your suggestion details:',
    title: 'suggestion submission form:',
    submitted: false,
    fields: {},
    errors: {},
    overlay: false,
  }

  componentDidMount() {
    const { getForm: dispatchGetForm } = this.props
    dispatchGetForm()
  }

  validateForm = () => {
    this.setState({
      errors: {},
    })

    const { fields } = this.state

    const errors = {}
    let isValid = true

    const urlPattern = new RegExp(
      /(^|\s)((https?:\/\/)?[\w-]+(\.[\w-]+)+\.?(:\d+)?(\/\S*)?)/gi
    )
    if (!urlPattern.test(fields.website)) {
      isValid = false
      errors.website = 'enter a valid website url...'
    }

    const emailPattern = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    )
    if (!emailPattern.test(fields.email)) {
      isValid = false
      errors.email = 'enter a valid email address...'
    }
    this.setState({ errors })
    return isValid
  }

  submitForm = () => {
    const { sendOrder: dispatchSendOrder } = this.props
    const { fields } = this.state
    const order = fields

    if (this.validateForm()) {
      dispatchSendOrder(order)
      this.setState({
        submitted: true,
        title: 'submitted suggestion form',
        message:
          'a rep will respond to your suggestion soon! here is what you submitted:',
        overlay: true,
      })
      setTimeout(() => {
        this.setState({ overlay: false })
      }, 2200)
    }
  }

  handleFieldChange = (field, value) => {
    const { fields } = this.state
    fields[field] = value
    this.setState({ fields })
  }

  formMapper(field) {
    console.log('FIELD', field)
    const { FormComponent } = field
    const { fields, errors, submitted } = this.state
    return (
      <FormComponent
        field={field}
        submitted={submitted}
        handleFieldChange={this.handleFieldChange}
        key={field.id}
        value={fields[field.name]}
        errorMessage={errors[field.name]}
      />
    )
  }

  render() {
    const { response, form } = this.props
    const { title, message, submitted, fields, errors, overlay } = this.state
    return (
      <OrderFormStyled>
        <View>
          <OrderFormStyled.title>{title}</OrderFormStyled.title>
          <OrderFormStyled.subtitle>{message}</OrderFormStyled.subtitle>

          {form && form.map(this.formMapper, this)}

          {submitted === false && (
            <OrderFormStyled.button
              onPress={this.submitForm}
              accessibilityLabel="Submit"
            >
              <OrderFormStyled.buttonText>Submit</OrderFormStyled.buttonText>
            </OrderFormStyled.button>
          )}

          {submitted && (
            <OrderFormStyled.response>
              <OrderFormStyled.responseTitle>
                candy store rep response:
              </OrderFormStyled.responseTitle>
              <OrderFormStyled.responseIcons>
                <OrderFormStyled.responseIcon
                  source={
                    response === Constants.REJECT
                      ? Images.thumbsDownSubmitted
                      : Images.thumbsDown
                  }
                  accessibilityLabel="Reject"
                />
                <OrderFormStyled.responseIcon
                  source={
                    response === Constants.ACCEPT
                      ? Images.thumbsUpSubmitted
                      : Images.thumbsUp
                  }
                  accessibilityLabel="Accept"
                />
              </OrderFormStyled.responseIcons>
            </OrderFormStyled.response>
          )}

          <Overlay
            visible={overlay}
            containerStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.78)' }}
            childrenWrapperStyle={{ backgroundColor: '#ffffff' }}
          >
            <View>
              <OrderFormStyled.checkMark
                source={Images.checkMark}
                alt="check mark"
              />
              <OrderFormStyled.submitMsg>
                Form Submitted!
              </OrderFormStyled.submitMsg>
            </View>
          </Overlay>
        </View>
      </OrderFormStyled>
    )
  }
}

const mapStateToProps = state => {
  const { response } = state.app
  const { form } = state.form
  return { response, form }
}

const mapDispatchToProps = dispatch => ({
  sendOrder: order => dispatch(sendOrder(order)),
  getForm: () => dispatch(getForm()),
})

OrderForm.propTypes = {
  response: PropTypes.string,
  sendOrder: PropTypes.func,
}

OrderForm.defaultProps = {
  response: null,
  sendOrder: undefined,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderForm)
