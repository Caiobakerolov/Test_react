import Paragraph from '../Paragraph'
import Title from '../Title'
import { Card, LinkButton } from './styles'

const Project = () => (
  <Card>
    <Title>Task List Project</Title>
    <Paragraph type="secundary">Task list made with Vue.js</Paragraph>
    <LinkButton>View</LinkButton>
  </Card>
)

export default Project
