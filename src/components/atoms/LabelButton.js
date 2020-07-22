import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.a`
  cursor: pointer;
  display: block;
  width: 100%;
  text-align: center;
  padding: 4px 16px;
  margin: 4px;
  min-width: 100px;
  border-radius: 6px;
  font-size: 1rem;
`;

const LabelButton = ({ onClick, children }) => {
  return <Button onClick={onClick}>{children}</Button>;
};

LabelButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.elementType,
};

export default LabelButton;
