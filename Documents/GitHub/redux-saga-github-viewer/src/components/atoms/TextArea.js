import React, { useCallback } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { colors } from '../../styles/variable';

const borderStyle = `1px solid ${colors.border}`;

const Container = styled.div`
  border-radius: 6px;
  border: ${borderStyle};
`;

const TextArea = styled.textarea`
  padding: 8px;
  border: none;
  outline: none;
  background: none;
  font-size: 1rem;
  width: 100%;
`;

const TextAreaComponent = ({ value, placeholder, onChange, onChangeText }) => {
  const _onChange = useCallback(
    (e) => {
      if (onChange) {
        onChange(e);
      }

      if (onChangeText) {
        onChangeText(e.target.value);
      }
    },
    [onChange, onChangeText]
  );
  return (
    <Container>
      <TextArea value={value} placeholder={placeholder} onChange={_onChange} />
    </Container>
  );
};

TextAreaComponent.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onChangeText: PropTypes.func,
};

export default TextAreaComponent;
