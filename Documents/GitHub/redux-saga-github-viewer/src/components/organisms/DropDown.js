import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { colors } from '../../styles/variable';

const Container = styled.div`
  cursor: pointer;
`;

const Menu = styled.ul`
  position: absolute;
  right: 20px;
  width: 200px;
  border-radius: 3px;
  padding: 0px;
  background: white;
  box-shadow: 1px 1px 4px 1px #33333326;
  border: none;
  list-style: none;
  color: ${colors.black};
  background: white;
  outline: none;
  li {
    padding: 10px 10px;
    font-size: 12px;
    cursor: pointer;
    color: black;
  }
  li:hover {
    background: rgb(3, 102, 214);
    opacity: 0.8;
    color: white;
  }
  a {
    text-decoration: none;
  a:hover {
    color: white;
  }
  
`;

const DropDown = () => {
  const [isOpenMenu, setIsOpenMenu] = React.useState(false);
  const menuRef = React.useRef();

  useEffect(() => {
    isOpenMenu && menuRef.current.focus();
  }, [isOpenMenu]);

  const onClick = () => {
    setIsOpenMenu(!isOpenMenu);
    if (isOpenMenu) {
      menuRef.current.focus();
    }
  };

  return (
    <Container>
      <FontAwesomeIcon icon={faBars} onClick={onClick} />
      {isOpenMenu && (
        <Menu
          onBlur={() => setTimeout(() => setIsOpenMenu(false), 200)}
          ref={menuRef}
          tabIndex={0}
        >
          <Link to='/'>
            <li>Top</li>
          </Link>
          <Link to='/profile'>
            <li>Profile</li>
          </Link>
          <Link to='/issue'>
            <li>Issue</li>
          </Link>
          <Link to='/pull-request'>
            <li>Pull Request</li>
          </Link>
        </Menu>
      )}
    </Container>
  );
};

export default DropDown;
