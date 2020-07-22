import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { color } from '../../styles/variable';

const Button = styled.a``;

const ButtonPrimary = styled.a``;

const ButtonDanger = styled.a``;

const map = {
  default: Button,
  primary: ButtonPrimary,
  danger: ButtonDanger,
};

const Button = ({ type, onClick, children }) => {
  const component = map[type] || map.default;
  return React.createElement(component, { onClick }, children);
};

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.elementType,
};

export default Button;
