import { SHOW_LOGIN, SHOW_SIGNUP } from './types';


export function showLogin(isLoginPageVisible) {
    console.log("show login : ", isLoginPageVisible)
    return {
        type: SHOW_LOGIN,
        isLoginPageVisible
    }
}

export function showSignup(isSignupPageVisible) {
    return {
        type: SHOW_SIGNUP,
        isSignupPageVisible
    }
}