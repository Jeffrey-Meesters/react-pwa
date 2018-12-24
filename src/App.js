import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import './App.sass';
import Header from './components/Header'
import Main from './router/Main'

library.add(faHome);


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
