import React from 'react';
import styled from 'styled-components';
import Issue from '../containers/Issue';

const Container = styled.div`
  padding: 16px;
`;

const Profile = () => {
  return (
    <Container>
      <Issue />
    </Container>
  );
};

export default Profile;
