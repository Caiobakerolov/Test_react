import styled from 'styled-components'
import { P } from '../../components/Paragraph/styles'

export const Description = styled(P)`
  margin-top: 24px;
  margin-bottom: 40px;
`

export const ButtonTheme = styled.button`
  border-radius: 6px;
  padding: 8px;
  color: ${(props) => props.theme.colorBackground};
  font-size: 10px;
  font-weight: bold;
  background-color: ${(props) => props.theme.colorMain};
  cursor: pointer;
`

export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;
  text-align: center;

  @media (max-width: 768px) {
    margin-bottom: 40px;
  }
`
