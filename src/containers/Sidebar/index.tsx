import Avatar from '../../components/Avatar'
import Paragraph from '../../components/Paragraph'
import Title from '../../components/Title'
import { Description, ButtonTheme, SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Title fontSize={20}>Caio Bakerolov</Title>
      <Paragraph type="secundary" fontSize={16}>
        Mr. Baker
      </Paragraph>
      <Description type="main" fontSize={12}>
        Engineer Full Stack Python UX/UI
      </Description>
      <ButtonTheme>Change Theme</ButtonTheme>
    </SidebarContainer>
  </aside>
)

export default Sidebar
