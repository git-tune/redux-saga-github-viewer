import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Index from './pages/Index';
import Profile from './containers/Profile';
import Issue from './pages/Issue';
import PullRequest from './pages/PullRequest';
import Header from './components/organisms/Header';
import Modal from './containers/Modal';
import { GlobalStyle } from './styles';

const Container = styled.div``;

const Content = styled.div`
  max-width: 896px;
  margin: 0 auto;
  padding: 32px 16px;
`;

const App = () => {
  return (
    <Router basename='/redux-saga-github-viewer'>
      <GlobalStyle />
      <Container>
        <Header />
        <Content>
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
            <Route exact path='/'>
              <Index />
            </Route>
          </Switch>
        </Content>
        <Modal />
      </Container>
    </Router>
  );
};

export default App;
