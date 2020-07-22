import { combineReducers } from 'redux';
import user from './user';
import issue from './issue';
import pullRequest from './pullRequest';
import modal from './modal';

const reducer = combineReducers({
  user,
  issue,
  pullRequest,
  ui: combineReducers({ modal }),
});

export default reducer;
