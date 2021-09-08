import styled from 'styled-components/native/dist/styled-components.native.esm';
import {Colors} from '../../constants/colors';

const TextInputStyled = styled.View``;

TextInputStyled.itemLabel = styled.Text`
  font-family: Arial;
  font-size: 14px;
  color: ${Colors.black};
  margin-left: 4px;
  margin-bottom: 2px;
`;

TextInputStyled.input = styled.TextInput`
  width: 100%;
  font-size: 14px;
  color: ${Colors.black};
  background-color: ${props =>
    props.submitted ? Colors.lightGray : Colors.white};
  height: 38px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 10px;
  border-color: ${Colors.textInputBorderColor};
  border-width: 1px;
`;

TextInputStyled.errorMsg = styled.Text`
  text-align: right;
  font-size: 14px;
  font-family: Arial;
  color: ${Colors.errorColor};
  min-height: 18px;
`;

export default TextInputStyled;
