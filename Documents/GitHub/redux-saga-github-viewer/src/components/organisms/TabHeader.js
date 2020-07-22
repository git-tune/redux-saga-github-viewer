import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { colors } from '../../styles/variable';

const Container = styled.div``;

const Tabs = styled.ul`
  display: flex;
  padding: 0;
  li {
    list-style: none;
  }
  span {
    cursor: pointer;
    color: ${colors.weakBlack};
    padding: 16px;
    display: block;
    width: 100%;
  }
`;

const borderStyle = `1px solid ${colors.border}`;

const Tab = styled.li`
  font-size: 14px;
  width: 100%;
  text-align: center;
  border-radius: 6px 6px 0px 0px;
  border-top: ${({ active }) => (!active ? '' : borderStyle)};
  border-right: ${({ active }) => (!active ? '' : borderStyle)};
  border-left: ${({ active }) => (!active ? '' : borderStyle)};
  border-bottom: ${({ active }) => (active ? '' : borderStyle)};
`;

const TabHeader = ({ tabs, selected, onChange }) => {
  return (
    <Container>
      <Tabs>
        {tabs.map(({ key, to, label }) => {
          const active = key === selected;
          const onClick = () => onChange(key);
          return (
            <Tab active={active} key={key}>
              <span onClick={onClick}>{label}</span>
            </Tab>
          );
        })}
      </Tabs>
    </Container>
  );
};

TabHeader.propTypes = {
  tabs: PropTypes.array,
  selected: PropTypes.string,
  onChange: PropTypes.func,
};

export default TabHeader;
