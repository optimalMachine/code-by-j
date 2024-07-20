import React from 'react';
import Header from './components/Header'
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <Header />
        <main>
          <Hero />
          <About />
          <Projects />
        </main>

      </div>
    </ThemeProvider>
  );
}

export default App;