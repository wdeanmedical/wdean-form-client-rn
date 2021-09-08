import styled from 'styled-components/native/dist/styled-components.native.esm';
import {Colors} from '../../constants/colors';
import {Text} from 'react-native';

const ResponseFormStyled = styled.View`
  width: 350px;
  background-color: ${Colors.white};
  border-width: 1px;
  border-radius: 10px;
  border-color: ${Colors.gray};
  padding: 20px;
`;

ResponseFormStyled.controls = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 75px;
  margin-top: 10px;
  margin-left: 25px;
`;

ResponseFormStyled.title = styled.Text`
  font-family: Arial;
  font-size: 18px;
  color: ${Colors.black};
  margin-bottom: 10px;
`;

ResponseFormStyled.orderItem = styled.Text`
  font-family: Arial;
  font-size: 16px;
  color: ${Colors.black};
  margin-top: 6px;
  margin-bottom: 6px;
`;
ResponseFormStyled.controlTitle = styled.Text`
  font-family: Arial;
  font-size: 16px;
  color: ${Colors.black};
  margin-top: 15px;
`;

ResponseFormStyled.order = styled.View`
  margin-left: 20px;
`;

ResponseFormStyled.responseForm = styled.View`
  margin-left: 20px;
`;

ResponseFormStyled.orderTitle = styled.Text`
  font-size: 16px;
  color: ${Colors.black};
  margin-top: 12px;
  margin-bottom: 16px;
`;

ResponseFormStyled.subtitle = styled.Text`
  font-size: 14px;
  color: ${Colors.battleshipGrey};
  margin-top: 20px;
  margin-bottom: 20px;
`;

ResponseFormStyled.response = styled.Image`
  width: 30px;
  height: 30px;
`;

export default ResponseFormStyled;
