import { SHOW_LOGIN, SHOW_SIGNUP } from '../actions/types';

export default (state = [], action = {}) => {
    //console.log(action.user);
    switch (action.type) {
        case SHOW_LOGIN:
            return Object.assign({}, state, {
                isLoginPageVisible: action.isLoginPageVisible
            });
        case SHOW_SIGNUP:
            return Object.assign({}, state, {
                isSignupPageVisible: action.isSignupPageVisible
            });
        default:
            return state;
    }
};