import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

class Result extends Component {
  constructor(props) {
      super(props);
      this.state = {

      }
  }

  render() {

    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <h4>fontsize: {this.props.fontSize}</h4>
          <h2>123123</h2>
      </div>
    );
  }
}

export default Result;
