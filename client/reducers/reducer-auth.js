import { SET_CURRENT_USER, GET_CURRENT_USER, RESET_STATE } from '../actions/types';
import isEmpty from 'lodash/isEmpty';

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default (state = initialState, action = {}) => {
  //console.log(action.user);
  switch(action.type) {
    case SET_CURRENT_USER:
      return {
        isAuthenticated: !isEmpty(action.user),
        user: action.user
  };
    case RESET_STATE:
      return {
        isAuthenticated: !isEmpty(action.user),
        user: action.user,
        state: state
      };
    default: return state;
  }
};
