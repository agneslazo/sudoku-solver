import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import MainContainer from './components/UI/MainContainer/MainContainer';
import Puzzle from './containers/Puzzle/Puzzle';
import Welcome from './containers/Welcome/Welcome';

function App() {
  return (
    <BrowserRouter>
      <MainContainer>
        <Switch>
          <Route path='/home' exact component={Welcome} />
          <Route path='/puzzle' exact component={Puzzle} />
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
        </Switch>
      </MainContainer>
    </BrowserRouter>
  );
}

export default App;
