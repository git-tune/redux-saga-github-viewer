import React from 'react';
import styled from 'styled-components';
import PullRequest from '../components/templates/PullRequest';

const Container = styled.div`
  padding: 16px;
  h1 {
    text-align: center;
  }
`;

const Profile = () => {
  return (
    <Container>
      <PullRequest />
    </Container>
  );
};

export default Profile;
