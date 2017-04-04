import React, {Component} from 'react';

import { connect } from 'react-redux';
import { StickyContainer, Sticky } from 'react-sticky';
import { Link } from 'react-router';
import {getCurrentUser} from '../actions/authActions';
import {bindActionCreators} from 'redux';

class DesktopBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            isDestopBarVisible : false
        };
        this.onMouseOut = this.onMouseOut.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
        this.onClick = this.onClick.bind(this);
        this.onMouseUp = this.onMouseUp.bind(this);
    }

    onClick(e){
        e.preventDefault();
        this.setState({"isDestopBarVisible": !this.state.isDestopBarVisible});
    };
    onMouseLeave(e){
        e.preventDefault();
        this.setState({isDestopBarVisible : false});
    }

    onMouseOut(e){
        e.preventDefault();
        this.setState({isDestopBarVisible : false});
    }
    onMouseUp(e){
        e.preventDefault();
        this.setState({isDestopBarVisible : false});
    }

    render() {
        return (
            <div>
                <span className="w3-opennav w3-xlarge w3-hide-large" onClick={this.onClick}>&#9776;</span>
                <nav className={"w3-sidenav w3-collapse w3-white w3-card-2 w3-animate-left" } 
                        style={{ "display":  this.state.isDestopBarVisible ? "block" : "none", "width": "200px"  }} 
                        id="mySidenav" 
                        onMouseOut={this.onMouseOut}
                        onMouseLeave={this.onMouseLeave}
                >
                    <li><Link to="videos">My videos</Link></li>
                    <li><Link to="#">Settings</Link></li>
                    <li><Link to="#">Logout</Link></li>
                </nav>
            </div>

        );
    }
}

DesktopBar.propTypes = {
  isDestopBarVisible:  React.PropTypes.bool, 
  isAuthenticated : React.PropTypes.bool
};

function matchDispatchToProps(dispatch){
    return bindActionCreators(
        {
            getCurrentUser: getCurrentUser
        }, dispatch);   
}

function matchStateToProps(state){
   return{
        isDestopBarVisible : state.reducerMenu.isDestopBarVisible, 
        isAuthenticated : state.auth.isAuthenticated,        
        userId : state.auth.user.id
    };
}
DesktopBar.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default connect(matchStateToProps, matchDispatchToProps)(DesktopBar);
