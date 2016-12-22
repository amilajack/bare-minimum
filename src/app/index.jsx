/* eslint-disable */
import React, { Component } from 'react';
import Home from '../routes/home/components';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import Header from '../components/header'

export default class App extends Component {
  render() {
    return (
        <div>
          <Header/>

          <div className="container" style={{'paddingTop': '50px', 'width': '100%', 'margin': '0 auto', paddingLeft: 0, paddingRight: 0}}>
            { this.props.children || <Home /> }
          </div>

        </div>

    );
  }
}