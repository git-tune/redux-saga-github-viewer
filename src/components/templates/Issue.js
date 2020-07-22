import React, { useCallback, useMemo, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { colors } from '../../styles/variable';
import Button from '../atoms/Button';
import TextField from '../atoms/TextField';
import IssueItem from '../organisms/IssueItem';
import NewIssue from './NewIssue';
import EditIssue from './EditIssue';

const borderStyle = `1px solid ${colors.border}`;

const Container = styled.div`
  margin-top: 30px;
  font-size: 14px;
`;

const Content = styled.div`
  overflow: scroll;
`;
const Header = styled.div`
  display: flex;
  align-items: center;
`;
const Heading = styled.div``;
const SearchForm = styled.div`
  padding: 8px 16px;
  display: flex;
  width: 100%;
  .text-field-container {
    width: 100%;
  }
`;

const Action = styled.div`
  display: flex;
`;

const Table = styled.table`
  border: ${borderStyle};
  border-radius: 6px;
  .outline {
    width: 120rem;
  }
  th,
  td {
    padding: 5px 0;
    text-align: left;
    min-width: 10rem;
    border-bottom: ${borderStyle};
    input {
      margin: 0 5px;
    }
  }
  th:first-child,
  td:first-child {
    min-width: auto;
  }
  .no-divider {
    border-bottom: 0;
  }
`;

const Issue = ({
  data,
  user,
  showModal,
  addIssue,
  removeIssue,
  updateIssue,
  removeModal,
}) => {
  const [searchWord, setSearchWord] = useState('');
  const list = useMemo(() => {
    const values = Object.values(data);
    if (!searchWord) {
      return values;
    }
    return values.filter((value) => value.title.includes(searchWord));
  }, [data, searchWord]);
  const [checked, setChecked] = useState({});
  const allChecked = useMemo(
    () =>
      Object.keys(data).length &&
      Object.keys(checked).length === Object.keys(data).length,
    [data, checked]
  );
  const onCheckAll = useCallback(() => {
    if (allChecked) {
      setChecked({});
      return;
    }
    setChecked(data);
  }, [allChecked, data]);

  const onCheck = useCallback(
    ({ id }) => {
      const newIds = { ...checked };
      if (checked[id]) {
        delete newIds[id];
      } else {
        newIds[id] = data[id];
      }
      setChecked(newIds);
    },
    [data, checked]
  );

  const onNew = useCallback(() => {
    const onAdd = (payload) => {
      addIssue(payload);
      removeModal();
    };
    showModal({
      component: (
        <NewIssue user={user} onSubmit={onAdd} onClose={removeModal} />
      ),
    });
  }, [user, showModal, removeModal, addIssue]);

  const onEdit = useCallback(
    (issue) => {
      showModal({
        component: (
          <EditIssue
            issue={issue}
            onSubmit={updateIssue}
            onClose={removeModal}
          />
        ),
      });
    },
    [showModal, removeModal, updateIssue]
  );

  const onRemove = useCallback(() => {
    Object.values(checked).forEach((issue) => {
      removeIssue({ issue });
    });
  }, [checked, removeIssue]);

  return (
    <Container>
      <Header>
        <Heading>
          <h2>Issue</h2>
        </Heading>
        <SearchForm>
          <TextField
            value={searchWord}
            placeholder='issue名で検索'
            onChangeText={setSearchWord}
          />
        </SearchForm>
        <Action>
          <Button type='primary' onClick={onNew}>
            New
          </Button>
          <Button type='danger' onClick={onRemove}>
            Delete
          </Button>
        </Action>
      </Header>
      <Content>
        <Table>
          <thead>
            <tr>
              <th>
                <input
                  type='checkbox'
                  defaultChecked={allChecked}
                  onClick={onCheckAll}
                />
              </th>
              <th></th>
              <th>ステータス</th>
              <th>作成者</th>
              <th>作成日付</th>
              <th>更新日付</th>
            </tr>
          </thead>
          <tbody>
            {list.length ? (
              list.map((item) => {
                return (
                  <IssueItem
                    key={item.id}
                    issue={item}
                    checked={checked[item.id]}
                    onClick={onEdit}
                    onCheck={onCheck}
                  />
                );
              })
            ) : (
              <></>
            )}
            {!list.length && (
              <tr>
                <td colSpan='6'>データがありません</td>
              </tr>
            )}
          </tbody>
        </Table>
      </Content>
    </Container>
  );
};

Issue.propTypes = {
  data: PropTypes.object,
  user: PropTypes.object,
  showModal: PropTypes.func,
  removeModal: PropTypes.func,
  addIssue: PropTypes.func,
  removeIssue: PropTypes.func,
  updateIssue: PropTypes.func,
};

export default Issue;
