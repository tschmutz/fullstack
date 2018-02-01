import merge from 'lodash/merge';

import { RECEIVE_CURRENT_USER } from '../actions/session_actions'


const _nullUser = Object.freeze({
  currentUser: null
});

const sessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  console.log("entering the session reducer");
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.user;
      return merge({}, { currentUser });
    default:
      return state;
  }
};

export default sessionReducer;
