import styled from 'styled-components'
import { Props } from './index'

export const Title = styled.h3<Props>`
  color: ${(props) => props.theme.colorMain};
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  font-weight: bold;
  margin-bottom: 16px;
  text-align: center;
  margin-bottom: 32px;
`
