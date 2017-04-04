import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import LoginPage from '../login/LoginPage';
import { logout } from '../../actions/authActions';
import { showLogin, showSignup } from '../../actions/loginActions';

class NavigationBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isSignUpVisible : true,
      IsLoginVisible : false
    };
    this.showLogin = this.showLogin.bind(this);
  }

  logout(e) {
    e.preventDefault();
    this.props.logout();
      this.context.router.push("/");
  };
  displayLogin(isLoginPageVisible, isSignupPageVisible){
    if(isLoginPageVisible || isSignupPageVisible){
        return(
            <LoginPage 
                Name="Login Page"
                Width="30%"
                Heigth="30%"
                Top="10%"
                Left="30%"
                Rigth="30%"
            />
        )
    }
    else{
        return(<div></div>)
    }
  }
  showLogin(e){
    e.preventDefault();
    this.props.showLogin(true);
    this.props.showSignup(false);
  }

  render() {
  const { isAuthenticated} = this.props;
  const userLinks = (
      <ul className="nav navbar-nav navbar-right">
        <li><span><Link to="student" className="topnav-icons fa w3-right">Hello {this.props.username}</Link></span> </li>
        <li><a href="#" onClick={this.logout.bind(this)} className="topnav-icons fa w3-right"><span>Logout</span></a></li>
      </ul>
    );

    const guestLinks = (
      <div>
        <ul className="nav navbar-nav navbar-right">
          <li><a href="#" onClick={this.showLogin} className="topnav-icons fa w3-right">Login</a></li>
        {/* <li><a href="#" onClick={this.showSignUp} className="topnav-icons fa w3-right">Sign Up</a></li>*/}
        </ul> </div>
    );
    return (
      <div>
        <div className="w3-navbar w3-left w3-black" id="topnav" style={{"position": "absolute", overflow:"hidden", heigth:"45px",left:"0px", right:"0px", zIndex:"4", "top":"0", width:"100%"}}>
            <div style={{"overflow":"auto", marginRight:"10px"}}>
              <ul className="w3-navbar" style={{"width":"100%","overflow":"hidden","height":"40px"}}>
                <li><a href="/" title="CSS Tutorial">Home</a></li>
                <li className="w3-right"> { isAuthenticated ? userLinks : guestLinks }</li>
              </ul>
          </div>
        </div>
        { this.displayLogin(this.props.isLoginPageVisible, this.props.isSignupPageVisible) }
        
      </div>
    );
  }
}

NavigationBar.propTypes = {
  toogleSideMenuAction: React.PropTypes.func,
  isAuthenticated: React.PropTypes.bool, 
  logout: React.PropTypes.func,
  userId: React.PropTypes.number
};
NavigationBar.contextTypes = {
  router: React.PropTypes.object.isRequired
};

function matchDispatchToProps(dispatch){
    return bindActionCreators({
        logout: logout, 
        showLogin: showLogin,
        showSignup: showSignup
      }, dispatch);   
}

function matchStateToProps(state){
   return{
        isAuthenticated : state.auth.isAuthenticated,
        username : state.auth.user.username,
        userId : state.auth.user.id,
        isLoginPageVisible : state.reducerLogin.isLoginPageVisible,
        isSignupPageVisible : state.reducerLogin.isSignupPageVisible
    };
}

export default connect(matchStateToProps, matchDispatchToProps)(NavigationBar);

