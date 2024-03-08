import { P } from './styles'

export type Props = {
  children: string
  type?: 'main' | 'secundary'
}

const Paragraph = ({ children, type = 'main' }: Props) => (
  <P type={type}>{children}</P>
)

export default Paragraph
