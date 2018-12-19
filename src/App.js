import React, { Component } from 'react';
import './App.sass';
import Button from './components/Button';

class App extends Component {
  
  clickHandler = () => {
    console.log('hi');
  }
  
  render() {
    return (
      <div className="App">
        <h1>Hi I'm still here!</h1>
        <Button btnText="Click me!" btnClass="thisPage primaryBtn" btnFunction={this.clickHandler} />
      </div>
    );
  }
}

export default App;
