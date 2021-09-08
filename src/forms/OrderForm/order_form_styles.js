import styled from 'styled-components/native/dist/styled-components.native.esm';
import {Colors} from '../../constants/colors';

const OrderFormStyled = styled.View`
  width: 350px;
  background-color: ${Colors.white};
  border-width: 1px;
  border-radius: 10px;
  border-color: ${Colors.gray};
  padding: 10px;
`;

OrderFormStyled.title = styled.Text`
  font-family: Arial;
  font-size: 18px;
  color: ${Colors.black};
  margin-bottom: 10px;
`;

OrderFormStyled.subtitle = styled.Text`
  font-size: 14px;
  color: ${Colors.battleshipGrey};
  margin-bottom: 10px;
`;

OrderFormStyled.button = styled.TouchableOpacity`
  border-width: 1px;
  border-radius: 5px;
  border-color: ${Colors.azure};
  background-color: ${Colors.azure};
  width: 140px;
  align-self: center;
`;

OrderFormStyled.buttonText = styled.Text`
  font-size: 16px;
  color: ${Colors.white};
  align-self: center;
  text-align: center;
  padding: 10px;
`;

OrderFormStyled.response = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
OrderFormStyled.responseTitle = styled.Text`
  font-family: Arial-BoldMT;
  font-size: 16px;
  color: ${Colors.battleshipGrey};
  margin-left: 8px;
`;

OrderFormStyled.responseIcons = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 65px;
  margin-right: 10px;
`;

OrderFormStyled.responseIcon = styled.Image`
  width: 20px;
  height: 20px;
`;

OrderFormStyled.checkMark = styled.Image`
  margin-left: 50px;
  margin-bottom: 20px;
`;

OrderFormStyled.submitMsg = styled.Text`
  font-family: Arial-BoldMT;
  color: ${Colors.black};
  font-size: 16px;
`;

export default OrderFormStyled;
