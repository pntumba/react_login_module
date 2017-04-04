import React, {Component, PropTypes} from 'react';
import LoginForm from './LoginForm';
import SignupForm from '../signup/SignupForm';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { showLogin, showSignup } from '../../actions/loginActions';

import { userSignupRequest, isUserExists } from '../../actions/signupActions';
import { addFlashMessageAction } from '../../actions/actionFlashMessages.js';


class LoginPage extends Component {
     constructor(props){
        super(props);
        this.state={
        }
        this.showSignUp = this.showSignUp.bind(this);
        this.showLogin = this.showLogin.bind(this);
    }

  showSignUp(e){
    e.preventDefault();
    this.props.showLogin(false);
    this.props.showSignup(true);
  }

  showLogin(e){
    e.preventDefault();
    this.props.showLogin(true);
    this.props.showSignup(false);
  }

  displayForm(){
    const { userSignupRequest, addFlashMessageAction } = this.props;
      if(this.props.isSignupPageVisible){
        return(
            <div
            style={{
                    position: "absolute", 
                    overflow:"hidden", 
                    height:this.props.Height,
                    zIndex:"10", 
                    top:this.props.Top, 
                    width:this.props.Width,
                    left:this.props.Left,
                    right:this.props.Right
                }}
            >
            <SignupForm 
                userSignupRequest={userSignupRequest}
                addFlashMessageAction={addFlashMessageAction}
                showSignup={this.props.showSignUp}
            />
              Or <a href="#" onClick={this.showLogin}><span>Already registered ?</span></a>
            </div>
        )
    }
     else if(this.props.isLoginPageVisible){
        return (
            <div 
            hidden={!this.props.isLoginPageVisible}  
            style={{
                    position: "absolute", 
                    overflow:"hidden", 
                    height:this.props.Height,
                    zIndex:"10", 
                    top:this.props.Top, 
                    width:this.props.Width,
                    left:this.props.Left,
                    right:this.props.Right
                }}>

              <h1>{this.props.Name}</h1>
              <LoginForm 
                showLogin={this.props.showLogin}
              />
              Or <a href="#" onClick={this.showSignUp}><span>Register now !</span></a>
            </div>
        );
    }
     
    else{
        return(
            <div></div>
        )
    }
  }

    render () {
        return(
            <div>{this.displayForm()}</div>
        )
    }
}

LoginPage.propTypes = {
    userSignupRequest: React.PropTypes.func.isRequired,
    addFlashMessageAction: React.PropTypes.func.isRequired
};

function matchDispatchToProps(dispatch){
    return bindActionCreators({
        showLogin: showLogin,
        showSignup: showSignup,
        addFlashMessageAction: addFlashMessageAction,
        userSignupRequest: userSignupRequest
      }, dispatch);   
}

function matchStateToProps(state){
   return{
        isLoginPageVisible : state.reducerLogin.isLoginPageVisible,
        isSignupPageVisible : state.reducerLogin.isSignupPageVisible
    };
}
export default connect(matchStateToProps, matchDispatchToProps)(LoginPage);