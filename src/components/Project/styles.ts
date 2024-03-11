import styled from 'styled-components'

export const Card = styled.div`
  border: 1px solid ${(props) => props.theme.colorBorder};
  padding: 16px;
`

export const LinkButton = styled.a`
  color: ${(props) => props.theme.colorBackground};
  font-size: 14px;
  background-color: ${(props) => props.theme.colorBackgroundButton};
  text-decoration: none;
  padding: 8px;
  border-radius: 6px;
  display: inline-block;
  margin-top: 24px;
`
