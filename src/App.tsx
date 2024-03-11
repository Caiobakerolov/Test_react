import { ThemeProvider } from 'styled-components'

import About from './containers/About'
import Projects from './containers/Projects'
import Sidebar from './containers/Sidebar'
import StyleGlobal, { Container } from './styles'
import themeLight from './Themes/light'
import themeDark from './Themes/dark'
import { useState } from 'react'

function App(): JSX.Element {
  const [usingDarkTheme, setUsingThemeDark] = useState(false)

  function changeTheme() {
    setUsingThemeDark(!usingDarkTheme)
  }

  return (
    <ThemeProvider theme={usingDarkTheme ? themeDark : themeLight}>
      <StyleGlobal />
      <Container>
        <Sidebar changeTheme={changeTheme} />
        <main>
          <About />
          <Projects />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
