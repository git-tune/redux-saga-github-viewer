import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div``;

const Logo = styled.div``;

const NavigationLinks = styled.ul``;

const Menu = styled.div``;

const Header = () => {
  return (
    <Container>
      <Logo>
        <Link to='/'>Github Viewer</Link>
      </Logo>
      <NavigationLinks>
        <Link to='/issue'>Issue</Link>
        <Link to='/pull-request'>Pull Request</Link>
      </NavigationLinks>
      <Menu></Menu>
    </Container>
  );
};

export default Header;
