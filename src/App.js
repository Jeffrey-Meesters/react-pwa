import React, { Component } from 'react';
import './App.sass';
import Button from './components/Button';

class App extends Component {
  
  clickHiHandler = () => {
    console.log('hi there');
  }

  clickByeHandler = () => {
    console.log('Bye Bye');
  }

  clickYoloHandler = () => {
    console.log('Yolo');
  }

  clickWTFHandler = () => {
    console.log('WTF!');
  }
  
  render() {
    return (
      <div className="App">
        <h1>Hi I'm still here!</h1>
        <div className="button-wapper">
          <div className="spacer hi-btn">
            <Button btnText="hi there!" btnClass="btn primary" btnFunction={this.clickHiHandler} />
          </div>
          
          <div className="spacer">
            <Button btnText="Bye bye" btnClass="btn secondary" btnFunction={this.clickByeHandler} />
          </div>
          
          <div className="spacer">
            <Button btnText="Yolo!" btnClass="btn light" btnFunction={this.clickYoloHandler} />
          </div>
          
          <div className="spacer">
            <Button btnText="Click me!" btnClass="btn dark" btnFunction={this.clickWTFHandler} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
