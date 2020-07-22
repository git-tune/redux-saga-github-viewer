import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  padding: 16px;
  margin: auto;
`;

const borderStyle = `1px solid rgb(225, 228, 232)`;

const Title = styled.h1``;

const Content = styled.div`
  margin: 32px 0;
  display: flex;
  border-radius: 6px;
  border: ${borderStyle};
`;

const Left = styled.div`
  padding: 16px;
  width: 50%;
`;
const Right = styled.div`
  padding: 16px;
  width: 50%;
`;

const Group = styled.div``;

const Label = styled.label`
  color: black;
`;

const Field = styled.p`
  padding: 16px 0;
  font-size: 1.2rem;
`;

const Profile = ({ user }) => {
  return (
    <Container>
      <Title>Profile</Title>
      <Content>
        <Left>
          <Group>
            <Label>プロフィール</Label>
            <Field>
              <img src={user.profileUrl} alt='プロフィール' />
            </Field>
          </Group>
        </Left>
        <Right>
          <Group>
            <Label>ユーザ名</Label>
            <Field>{user.name}</Field>
          </Group>
          <Group>
            <Label>メールアドレス</Label>
            <Field>{user.email}</Field>
          </Group>
        </Right>
      </Content>
    </Container>
  );
};

Profile.propTypes = {
  user: PropTypes.object,
};

export default Profile;
