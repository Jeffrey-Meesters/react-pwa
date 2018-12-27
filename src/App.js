import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faAngleDoubleDown, faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';
import './App.sass';
import Header from './components/Header'
import Main from './router/Main'

library.add(faHome, faAngleDoubleDown, faAngleDoubleUp);

class App extends Component {
  render() {
    return (
      <div className="page-wrapper">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
