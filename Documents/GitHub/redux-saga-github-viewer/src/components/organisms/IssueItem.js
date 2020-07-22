import React, { useCallback } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import { colors } from '../../styles/variable';

const statusLabel = {
  0: 'Open',
  1: 'Close',
};

const Container = styled.tr`
  cursor: pointer;
  &:hover {
    background: ${colors.hoverRow};
  }
`;

const IssueItem = ({ checked, onClick, onCheck, issue }) => {
  const { id, title, status, createBy, createdAt, updatedAt } = issue;
  const _onClick = useCallback(
    (e) => {
      onClick(issue);
    },
    [issue, onClick]
  );
  const _onCheck = useCallback(
    (e) => {
      e.stopPropagation();
      onCheck(issue);
    },
    [issue, onCheck]
  );
  return (
    <Container key={id} onClick={_onClick}>
      <td>
        <input type='checkbox' checked={checked} onClick={_onCheck} />
      </td>
      <td className='outline'>{title}</td>
      <td>{statusLabel[status]}</td>
      <td>{createBy}</td>
      <td>{dayjs(createdAt).format('MM-DD-YYYY')}</td>
      <td>{dayjs(updatedAt).format('MM-DD-YYYY')}</td>
    </Container>
  );
};

IssueItem.propTypes = {
  checked: PropTypes.bool,
  onCheck: PropTypes.func,
  onClick: PropTypes.func,
  issue: PropTypes.object,
};

export default IssueItem;
