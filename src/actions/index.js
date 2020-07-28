// action type //

// issue
export const ISSUE_ADD = 'ISSUE_ADD';
export const ISSUE_REMOVE = 'ISSUE_REMOVE';
export const ISSUE_UPDATE = 'ISSUE_UPDATE';
export const ISSUE_FETCH_REQUESTED = 'ISSUE_FETCH_REQUESTED';
export const ISSUE_FETCH_SUCCEEDED = 'ISSUE_FETCH_SUCCEEDED';
export const ISSUE_FETCH_FAILED = 'ISSUE_FETCH_FAILED';
export const ISSUE_CREATE_REQUESTED = 'ISSUE_CREATE_REQUESTED';
export const ISSUE_CREATE_SUCCEEDED = 'ISSUE_CREATE_SUCCEEDED';
export const ISSUE_CREATE_FAILED = 'ISSUE_CREATE_FAILED';
export const ISSUE_UPDATE_REQUESTED = 'ISSUE_UPDATE_REQUESTED';
export const ISSUE_UPDATE_SUCCEEDED = 'ISSUE_UPDATE_SUCCEEDED';
export const ISSUE_UPDATE_FAILED = 'ISSUE_UPDATE_FAILED';

// modal
export const MODAL_PUSH = 'MODAL_PUSH';
export const MODAL_POP = 'MODAL_POP';
export const MODAL_HIDE = 'MODAL_HIDE';

// user
export const USER_FETCH_REQUESTED = 'USER_FETCH_REQUESTED';
export const USER_FETCH_SUCCEEDED = 'USER_FETCH_SUCCEEDED';
export const USER_FETCH_FAILED = 'USER_FETCH_FAILED';

// action creators //

// issue
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

// modal
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

// user
const userFetchRequested = () => {
  return {
    type: USER_FETCH_REQUESTED,
  };
};

export const actionCreators = {
  addIssue,
  removeIssue,
  updateIssue,
  showModal,
  removeModal,
  hideModal,
  userFetchRequested,
};
