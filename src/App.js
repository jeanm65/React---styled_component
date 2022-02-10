import React from 'react';
import {Container} from './Components/Styles/Containers.styled'
import Header from './Components/Header';
import {ThemeProvider } from 'styled-components';
import GlobalStyles from './Components/Styles/Global';
import content from './content';
import Cards from './Components/Cards';
import Footer from './Components/Footer';
import SocialIcons from './Components/SocialIcons';

const App = () => {
  const theme = {
    colors: {
      header: "teal",
      body: '#fff',
      footer: '#003333'
    },
  }
  
  return (
  <ThemeProvider theme = {theme}>
    <>
      <GlobalStyles />
        <Header />
        <Container>
          {content.map((item, index) => (
            <Cards key={index} item={item} />
          ))}
        </Container>
        <Footer />
        <SocialIcons />
    </>
  </ThemeProvider>
  );
};

export default App;
