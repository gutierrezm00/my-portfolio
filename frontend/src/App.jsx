import './App.css';
import { Route, Switch } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

import Home from './components/views/Home';
import Header from './components/Header';

library.add(fas);

const HeaderContainer = styled.div` 
  display: flex;
  position:relative;
  flex-grow: 1;
  width: 100%;
`;
function App() {
  return (
    <div className="App">
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </div>
  );
}

export default App;
