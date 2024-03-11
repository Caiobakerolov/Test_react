import Title from '../../components/Title'
import Paragraph from '../../components/Paragraph'
import { GitHubSection } from './styles'

const About = () => (
  <section>
    <Title fontSize={16}>About me</Title>
    <Paragraph type="secundary">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur
      iusto facere sapiente in neque quaerat voluptatum praesentium mollitia ab
      accusamus voluptate quia earum officiis ad sit, nihil pariatur inventore
      at!
    </Paragraph>
    <GitHubSection>
      <img src="https://github-readme-stats.vercel.app/api?username=Caiobakerolov&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Caiobakerolov&layout=compact&langs_count=7&theme=dracula" />
    </GitHubSection>
  </section>
)

export default About
