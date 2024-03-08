import About from './containers/About'
import Projects from './containers/Projects'
import Sidebar from './containers/Sidebar'
import StyleGlobal, { Container } from './styles'

function App(): JSX.Element {
  return (
    <>
      <StyleGlobal />
      <Container>
        <Sidebar />
        <main>
          <About />
          <Projects />
        </main>
      </Container>
    </>
  )
}

export default App
