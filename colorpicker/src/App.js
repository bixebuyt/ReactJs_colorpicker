import React, { Component } from 'react';
import Colorpicker from './components/Colorpicker';
import Customfontsize from './components/Customfontsize';
import Result from './components/Result';
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="App">
            <header className="App-header">
              <h1>Welcome to Colorpicker</h1>
            </header>
            <Colorpicker />
            <Customfontsize />
            <Result />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
