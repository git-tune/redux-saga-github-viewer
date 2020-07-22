import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalStyle } from './styles';
import Profile from './pages/Profile';
import Issue from './pages/Issue';
import PullRequest from './pages/PullRequest';
import Index from './pages/index';

function App() {
  return (
    <Router basename='/redux-saga-github-viewer'>
      <GlobalStyle />
      <Switch>
        <Route path='/profile'>
          <Profile />
        </Route>
        <Route path='/issue'>
          <Issue />
        </Route>
        <Route path='/pull-request'>
          <PullRequest />
        </Route>
        <Router exact path='/'>
          <Index />
        </Router>
      </Switch>
    </Router>
  );
}

export default App;
