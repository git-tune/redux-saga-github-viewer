import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import DropDown from './DropDown';
import { colors } from '../../styles/variable';

const size = {
  mobile: '576px',
};

const device = {
  mobile: `(max-width: ${size.mobile})`,
};

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 75px;
  background: ${colors.black};
  color: white;
`;

const Logo = styled.div`
  white-space: nowrap;
  letter-spacing: -1px;
  font-size: 13px;
  margin-top: 7px;
  margin-left: 20px;
  cursor: pointer;
  text-decoration: none;
  a {
    color: white;
  }
`;

const Links = styled.ul`
  white-space: nowrap;
  letter-spacing: -1px;
  list-style: none;
  display: flex;
  margin: 32px 0 32px 10px;
  font-size: 14px;
  font-weight: bolder;
  li {
    margin: 0 10px;
    cursor: pointer;
  }
  a {
    color: white;
  }
  @media ${device.mobile} {
    display: none;
  }
`;

const Menu = styled.div`
  font-size: 16px;
  margin: 27px 30px 40px auto;
`;

const Header = () => {
  return (
    <Container>
      <Logo>
        <h1>
          <Link to='/'>Github Viewer</Link>
        </h1>
      </Logo>
      <Links>
        <li>
          <Link to='/issue'>Issue</Link>
        </li>

        <li>
          <Link to='/pull-request'>Pull Request</Link>
        </li>
      </Links>
      <Menu>
        <DropDown />
      </Menu>
    </Container>
  );
};

export default Header;
