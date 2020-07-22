import React from 'react';
import styled from 'styled-components';

const Container = styled.div``;

const DropDown = () => {
  const [isOpenMenu, setIsOpenMenu] = React.useState(false);
  const menuRef = React.useRef();

  useEffect(() => {
    isOpenMenu && menuRef.current.focus();
  }, [isOpenMenu]);

  const onClick = () => {
    setIsOpenMenu(!isOpenMenu);
    if (isOpenMenu) {
      this.menuRef.current.focus();
    }
  };

  return <Container></Container>;
};

export default DropDown;
