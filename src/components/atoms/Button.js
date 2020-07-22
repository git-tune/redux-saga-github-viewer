import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { colors } from '../../styles/variable';

const Button = styled.a`
  cursor: pointer;
  display: block;
  width: 100%;
  text-align: center;
  padding: 4px 16px;
  margin: 4px;
  min-width: 80px;
  border-radius: 6px;
  color: white;
  font-size: 0.9rem;
`;

const ButtonPrimary = styled(Button)`
  background: ${colors.primary};
  border-bottom: 2px solid #28a745;
  &:hover {
    background: #28a745;
    border-bottom: 2px solid #208437;
  }
  &:active {
    border-bottom: 0;
  }
`;

const ButtonDanger = styled(Button)`
  background: ${colors.danger};
  border-bottom: 2px solid #af1c2a;
  &:hover {
    background: #af1c2a;
    border-bottom: 2px solid #671019;
  }
  &:active {
    border-bottom: 0;
  }
`;

const map = {
  default: Button,
  primary: ButtonPrimary,
  danger: ButtonDanger,
};

const ButtonComponent = ({ type, onClick, children }) => {
  const component = map[type] || map.default;
  return React.createElement(component, { onClick }, children);
};

ButtonComponent.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.elementType,
};

export default ButtonComponent;
