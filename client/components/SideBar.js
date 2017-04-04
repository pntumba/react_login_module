import React, {Component} from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router';
import {getCurrentUser} from '../actions/authActions';
import {bindActionCreators} from 'redux';

class SideBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            isMenuVisible : false
        };
        this.onMouseOut = this.onMouseOut.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
        this.onClick = this.onClick.bind(this);
        this.onMouseUp = this.onMouseUp.bind(this);
    }

    onClick(e){
        e.preventDefault();
        this.setState({"isMenuVisible": !this.state.isMenuVisible});
    };
    onMouseLeave(e){
        e.preventDefault();
        this.setState({isMenuVisible : false});
    }

    onMouseOut(e){
        e.preventDefault();
        this.setState({isMenuVisible : false});
    }
    onMouseUp(e){
        e.preventDefault();
        this.setState({isMenuVisible : false});
    }

    render() {
        return (
            <div>
                <span className="w3-opennav w3-xlarge w3-hide-large" onClick={this.onClick}>&#9776;</span>
                <nav className={"w3-sidenav w3-collapse w3-white w3-card-2 w3-animate-left" } 
                        style={{ "display":  this.state.isMenuVisible ? "block" : "none", "width": "200px"  }} 
                        id="mySidenav" 
                        onMouseOut={this.onMouseOut}
                        onMouseLeave={this.onMouseLeave}
                >
                    <ul className="css-treeview">
                        <li><input type="checkbox" id="item-0-0-0" /><label htmlFor="item-0-0-0"><Link to="videos">My videos</Link></label></li>
                        <li><input type="checkbox" id="item-0-0-0" /><label htmlFor="item-0-0-0"><Link to="#">Settings</Link></label></li>
                        <li><input type="checkbox" id="item-0-0-0" /><label htmlFor="item-0-0-0"><Link to="#">Logout</Link></label></li>
                    </ul>
                </nav>
            </div>

        );
    }
}

SideBar.propTypes = {
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
        isAuthenticated : state.auth.isAuthenticated,        
        userId : state.auth.user.id
    };
}
SideBar.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default connect(matchStateToProps, matchDispatchToProps)(SideBar);
