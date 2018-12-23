import React, { Component } from 'react';
import './App.sass';
import Header from './components/Header'
import Main from './router/Main'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
