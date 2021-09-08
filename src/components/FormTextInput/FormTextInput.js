import React from 'react';
import PropTypes from 'prop-types';
import FieldShape from '../../state/shapes/FieldShape';
import TextInputStyled from './form_text_input_styles';

const FormTextInput = props => {
  const {field, submitted, handleFieldChange, value, errorMessage} = props;
  return (
    <TextInputStyled>
      <TextInputStyled.itemLabel>{field.label}</TextInputStyled.itemLabel>
      <TextInputStyled.input
        {...props}
        autoCapitalize="none"
        editable={submitted === false}
        placeholder={field.placeholder}
        value={value}
        onChangeText={value => handleFieldChange(field.name, value)}
      />
      <TextInputStyled.errorMsg>{errorMessage}</TextInputStyled.errorMsg>
    </TextInputStyled>
  );
};

FormTextInput.propTypes = {
  handleFieldChange: PropTypes.func,
  submitted: PropTypes.bool,
  value: PropTypes.string,
  errorMessage: PropTypes.string,
  field: PropTypes.shape(FieldShape),
};

FormTextInput.defaultProps = {
  handleFieldChange: undefined,
  submitted: false,
  value: '',
  errorMessage: '',
  field: {},
};

export default FormTextInput;
