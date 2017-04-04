import { combineReducers } from 'redux';
import reducerFlashMessages from './reducers/reducer-flashMessages';
import reducerLogin from './reducers/reducer-login';
import auth from './reducers/reducer-auth';

export default combineReducers({
    reducerFlashMessages,
    reducerLogin,
    auth
});