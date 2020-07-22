import { MODAL_HIDE, MODAL_PUSH, MODAL_POP } from '../actions';

const initialState = {
  show: false,
  stack: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case MODAL_HIDE:
      return { ...state, show: false };
    case MODAL_PUSH:
      return {
        ...state,
        stack: [...state.stack, action.payload.component],
        show: true,
      };
    case MODAL_POP:
      return { ...state, stack: state.stack.slice(0, -1), show: false };
    default:
      return state;
  }
};

export default reducer;
