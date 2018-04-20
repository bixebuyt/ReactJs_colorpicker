import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

class Customfontsize extends Component {
  constructor(props) {
      super(props);
      this.state = {

      }
  }

  render() {
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="panel panel-primary">
          <div className="panel-heading"><h3 className="panel-title">Font size</h3></div>
          <div className="panel-body">
            <div className="btn-group">
              <button type="button" className="btn btn-success">Giảm</button>
              <button type="button" className="btn btn-danger">Tăng</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Customfontsize;
