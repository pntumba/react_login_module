import axios from 'axios';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import jwtDecode from 'jwt-decode';
import { SET_CURRENT_USER, GET_CURRENT_USER, RESET_STATE } from './types';

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user
  };
}

export function resetState() {
  return {
    type: RESET_STATE
  };
}

export function logout() {
  return dispatch => {
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('currentCourse');
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}));
  };
}

export function login(data) {
  return dispatch => {
    return axios.post('/api/auth', data)
      .then(res => {
        //console.log(res);
          const token = res.data.token;
          //console.log('decode token : ',jwtDecode(token));
          localStorage.setItem('jwtToken', token);
          setAuthorizationToken(token);
          dispatch(setCurrentUser(jwtDecode(token)));
        });
  };
}