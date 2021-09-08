import { Platform } from 'react-native'
import RNPickerSelect from 'react-native-picker-select'
import styled, {
  css,
} from 'styled-components/native/dist/styled-components.native.esm'
import { Colors } from '../../constants/colors'

const SelectInputStyled = styled.View`
  margin-top: 0px;
  margin-bottom: 0px;
`

SelectInputStyled.itemLabel = styled.Text`
  font-family: Arial;
  font-size: 14px;
  color: ${Colors.battleshipGrey};
  margin-left: 4px;
  margin-bottom: 2px;
`

SelectInputStyled.select = styled(RNPickerSelect)`
  background-color: ${props =>
    props.submitted ? Colors.lightGray : Colors.white};
  border-width: 0;
  width: 100%;
  font-size: 14px;
  color: ${Colors.black};
  height: 38px;
`

SelectInputStyled.selectWrapper = styled.View`
  background-color: ${props =>
    props.submitted ? Colors.lightGray : Colors.white};
  border-width: 1px;
  width: 100%;
  padding-right: 10px;
  color: ${Colors.black};
  height: 38px;
  border-radius: 10px;
  ${Platform.select({
    ios: css`
      padding-top: 10px;
      padding-left: 10px;
    `,
    android: css``,
  })};
  border-color: ${Colors.textInputBorderColor};
`

SelectInputStyled.option = styled.Text`
  font-size: 12px;
`

SelectInputStyled.errorMsg = styled.Text`
  font-family: Arial;
  text-align: right;
  font-size: 12px;
  color: ${Colors.errorColor};
  min-height: 18px;
`

export default SelectInputStyled
