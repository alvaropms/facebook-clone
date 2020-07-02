import React from 'react';
import GlobalStyles from './styles.js';
import {Grid, Body} from './styles.js';
import Header from './components/Header';
import Menu from './components/Menu'
import Feed from './components/Feed'
import Friends from './components/Friends'

function App() {
  return (
    <>
    
    <Grid>
      <Header/>
      <Body>
        <Menu/>
        <Feed/>
        <Friends/>
      </Body>
      <GlobalStyles/>
    </Grid>
    
    
    </>
  );
}

export default App;
