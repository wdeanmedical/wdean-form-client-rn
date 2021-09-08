import styled from 'styled-components/native/dist/styled-components.native.esm'
import { Colors } from './src/constants/colors'

const AppStyled = styled.ScrollView``

AppStyled.container = styled.View`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  background-color: ${Colors.white}
  align-items: center;
`

AppStyled.screenDivider = styled.View`
  height: 30px;
`

export default AppStyled
