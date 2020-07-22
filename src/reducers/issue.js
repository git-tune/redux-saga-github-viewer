import { ISSUE_ADD, ISSUE_REMOVE, ISSUE_UPDATE } from '../actions';

const initialData = {
  1: {
    id: 1,
    title: 'bug-issue',
    status: 0,
    description: 'バグ報告をするときに使う。→ 修正したらクローズする',
    createBy: 'tune',
  },
  2: {
    id: 2,
    title: 'enhancement-issue',
    status: 0,
    description:
      '機能追加の要望や改善してほしいときに使う。→ 実装したらクローズする',
    createBy: 'tune',
  },
  3: {
    id: 3,
    title: 'question-issue',
    status: 0,
    description: '質問したいときに使う。→ 質問・議論の答えがでたらクローズする',
    createBy: 'tune',
  },
};

const initialState = {
  index: Object.keys(initialData).length,
  data: initialData,
};

const reducer = (state = initialState, action) => {
  const { index, data } = state;
  const { issue } = action.payload || {};
  const newData = { ...state.data };
  const id = index + 1;
  switch (action.type) {
    case ISSUE_ADD:
      newData[id] = { ...issue, id };
      return { ...state, index: id, data: newData };
    case ISSUE_UPDATE:
      return { ...state, data: { ...data, [issue.id]: issue } };
    case ISSUE_REMOVE:
      delete newData[issue.id];
      return { ...state, data: newData };
    default:
      return state;
  }
};

export default reducer;
