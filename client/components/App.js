import React from 'react';
import NavigationBar from './navigation/NavigationBar';
import FlashMessagesList from './flash/FlashMessagesList';
import { Grid, Col, Row } from 'react-bootstrap';
import SideBar from './SideBar';

import style from '../css/style.css';

class App extends React.Component {
  render() {
    return (
          <div className="w3-container">
                <div className="w3-container">
                    {this.props.children}
                    <FlashMessagesList />
                </div>
          </div>
    );
  }
}

export default App;
