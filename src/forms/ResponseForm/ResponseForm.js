import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {View, TouchableOpacity} from 'react-native';
import Images from '@local/assets/index';
import {sendResponse} from '../../state/actions';
import * as Constants from '../../constants/constants';
import ResponseFormStyled from './response_form_styles';

class ResponseForm extends Component {
  state = {};

  componentDidMount() {}

  sendResponse = response => {
    const {sendResponse: dispatchSendResponse} = this.props;
    dispatchSendResponse({response});
  };

  render() {
    const {order, response} = this.props;
    return (
      <ResponseFormStyled>
        <ResponseFormStyled.title>
          submitted suggestion form
        </ResponseFormStyled.title>
        {order === null && (
          <ResponseFormStyled.subtitle>
            currently waiting for a response...
          </ResponseFormStyled.subtitle>
        )}
        {order && (
          <View>
            <ResponseFormStyled.orderTitle>
              suggestion:
            </ResponseFormStyled.orderTitle>

            <ResponseFormStyled.order>
              <ResponseFormStyled.orderItem>
                {order.name}
              </ResponseFormStyled.orderItem>
              <ResponseFormStyled.orderItem>
                {order.company}
              </ResponseFormStyled.orderItem>
              <ResponseFormStyled.orderItem>
                {order.website}
              </ResponseFormStyled.orderItem>
              <ResponseFormStyled.orderItem>
                {order.email}
              </ResponseFormStyled.orderItem>
              <ResponseFormStyled.orderItem>
                {order.specialty}
              </ResponseFormStyled.orderItem>
              <ResponseFormStyled.orderItem>
                {order.price}
              </ResponseFormStyled.orderItem>
            </ResponseFormStyled.order>

            <ResponseFormStyled.responseForm>
              <ResponseFormStyled.controlTitle>
                submit a response:
              </ResponseFormStyled.controlTitle>
              <ResponseFormStyled.controls>
                <TouchableOpacity
                  onPress={() => this.sendResponse(Constants.REJECT)}
                  accessibilityLabel="Reject">
                  <ResponseFormStyled.response
                    source={
                      response && response.response === Constants.REJECT
                        ? Images.thumbsDownButtonSubmitted
                        : Images.thumbsDownButton
                    }
                    accessibilityLabel="Reject"
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.sendResponse(Constants.ACCEPT)}
                  accessibilityLabel="Accept">
                  <ResponseFormStyled.response
                    source={
                      response && response.response === Constants.ACCEPT
                        ? Images.thumbsUpButtonSubmitted
                        : Images.thumbsUpButton
                    }
                  />
                </TouchableOpacity>
              </ResponseFormStyled.controls>
            </ResponseFormStyled.responseForm>
          </View>
        )}
      </ResponseFormStyled>
    );
  }
}

const mapStateToProps = state => {
  const {order, response} = state.app;
  return {order, response};
};

const mapDispatchToProps = dispatch => ({
  sendResponse: response => dispatch(sendResponse(response)),
});

ResponseForm.propTypes = {
  sendResponse: PropTypes.func,
  order: PropTypes.shape({
    name: PropTypes.string,
    company: PropTypes.string,
    email: PropTypes.string,
    website: PropTypes.string,
    specialty: PropTypes.string,
    price: PropTypes.string,
  }),
  response: PropTypes.shape({
    response: PropTypes.string,
  }),
};

ResponseForm.defaultProps = {
  sendResponse: undefined,
  order: {},
  response: null,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ResponseForm);
