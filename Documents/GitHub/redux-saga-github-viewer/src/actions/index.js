// action type

export const ISSUE_ADD = 'ISSUE_ADD';
export const ISSUE_REMOVE = 'ISSUE_REMOVE';
export const ISSUE_UPDATE = 'ISSUE_UPDATE';
export const MODAL_PUSH = 'MODAL_PUSH';
export const MODAL_POP = 'MODAL_POP';
export const MODAL_HIDE = 'MODAL_HIDE';

// action creators

const addIssue = ({ issue }) => {
  return {
    type: ISSUE_ADD,
    payload: { issue },
  };
};

const removeIssue = ({ issue }) => {
  return {
    type: ISSUE_REMOVE,
    payload: { issue },
  };
};

const updateIssue = ({ issue }) => {
  return {
    type: ISSUE_UPDATE,
    payload: { issue },
  };
};

const showModal = ({ component }) => {
  return {
    type: MODAL_PUSH,
    payload: { component },
  };
};

const removeModal = () => {
  return {
    type: MODAL_POP,
    payload: {},
  };
};

const hideModal = () => {
  return {
    type: MODAL_HIDE,
    payload: {},
  };
};

export const actionCreators = {
  addIssue,
  removeIssue,
  updateIssue,
  showModal,
  removeModal,
  hideModal,
};
