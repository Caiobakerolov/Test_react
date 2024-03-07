import styled from 'styled-components'

type BotaoProps = {
  principal: boolean
  fontSize?: string
}

const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? 'green' : 'orange')};
  font-size: ${(props) => props.fontSize || '16px'};
`

const BotaoPerigo = styled(Botao)`
  background-color: red;
  color: #fff;

  span {
    text-decoration: line-through;
  }
`

function Test(): JSX.Element {
  return (
    <>
      <Botao principal>Send</Botao>
      <Botao fontSize="14px" principal={false}>
        Cancel
      </Botao>
      <BotaoPerigo principal>
        <span>dont click here</span>
      </BotaoPerigo>
    </>
  )
}

export default Test
