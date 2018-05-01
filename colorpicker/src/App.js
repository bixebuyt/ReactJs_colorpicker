import React, { Component } from 'react';
import Colorpicker from './components/Colorpicker';
import Customfontsize from './components/Customfontsize';
import Result from './components/Result';
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontSize: 12
    }
  }
  onChangeSize(value) {
    console.log(value)
  }
  render() {
    console.log(this.state.fontSize);
    return (
      <div className="container">
        <div className="row">
          <div className="App">
            <header className="App-header">
              <h1>Welcome to Colorpicker</h1>
            </header>
            <Colorpicker />
            <Customfontsize
              fontSize={this.state.fontSize}
              onChangeSize={this.onChangeSize}
            />
            <Result fontSize={this.state.fontSize} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
