import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  padding: 16px;
  margin-top: 64px;
  h1 {
    text-align: center;
  }
`;

const Content = styled.div`
  max-width: 480px;
  padding: 64px;
  margin: auto;
  a {
    display: block;
    text-align: center;
  }
`;

const Index = () => {
  return (
    <Container>
      <h1>Index</h1>
      <Content>
        <ul>
          <li>
            <Link to='/profile'>Profile</Link>
          </li>
          <li>
            <Link to='/issue'>Issue</Link>
          </li>
          <li>
            <Link to='/pull-requests'>Pull Request</Link>
          </li>
        </ul>
      </Content>
    </Container>
  );
};

export default Index;
