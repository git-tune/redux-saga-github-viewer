import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TextField from '../../components/atoms/TextField';
import TextArea from '../../components/atoms/TextArea';
import Button from '../../components/atoms/Button';
import LabelButton from '../../components/atoms/LabelButton';
import { colors } from '../../styles/variable';

const Container = styled.div`
  max-width: 500px;
  margin: auto;
  a {
    width: auto;
  }
  textarea {
    min-height: 150px;
  }
`;

const Title = styled.h2`
  padding: 0 8px;
`;

const Form = styled.div`
  padding: 32px 0;
  padding-bottom: 16px;
`;
const Field = styled.div`
  padding: 16px;
`;
const Label = styled.label`
  display: block;
  padding: 8px 0;
`;

const MessageContainer = styled.div``;

const ErrorMessage = styled.p`
  color: ${colors.danger};
  background: #d73a4959;
  padding: 8px;
  border-radius: 6px;
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 8px;
`;

const EditIssue = ({ issue, onSubmit, onClose }) => {
  const [validationError, setValidationError] = useState('');
  const [title, setTitle] = useState(issue.title);
  const [status, setStatus] = useState(issue.status);
  const [description, setDescription] = useState(issue.description);

  const onChangeStatus = useCallback(
    (e) => {
      setStatus(e.target.value);
    },
    [setStatus]
  );

  const _onSubmit = useCallback(() => {
    if (!title) {
      setValidationError('タイトルを入力してください');
      return;
    }

    if (!description) {
      setValidationError('説明を入力してください');
      return;
    }

    const now = new Date();
    onSubmit({
      issue: {
        ...issue,
        title,
        description,
        status,
        updatedAt: now,
      },
    });
    onClose();
  }, [
    issue,
    title,
    status,
    description,
    onSubmit,
    onClose,
    setValidationError,
  ]);

  return (
    <Container>
      <Title>Issueを追加</Title>
      <Form>
        <Field>
          <Label>タイトル</Label>
          <TextField
            value={title}
            placeholder='タイトルを入力してください'
            onChangeText={setTitle}
          />
        </Field>
        <Field>
          <Label>説明</Label>
          <TextArea
            value={description}
            placeholder='説明を入力してください'
            onChangeText={setDescription}
          />
        </Field>
        <Field>
          <Label>ステータス</Label>
          <select value={status} onChange={onChangeStatus}>
            <option value='0'>Open</option>
            <option value='1'>Close</option>
          </select>
        </Field>
      </Form>
      <MessageContainer>
        {validationError && <ErrorMessage>{validationError}</ErrorMessage>}
      </MessageContainer>
      <Footer>
        <Button type='primary' onClick={_onSubmit}>
          更新
        </Button>
        <LabelButton onClick={onClose}>閉じる</LabelButton>
      </Footer>
    </Container>
  );
};

EditIssue.propTypes = {
  issue: PropTypes.object,
  onSubmit: PropTypes.func,
  onClose: PropTypes.func,
};

export default EditIssue;
