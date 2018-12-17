import React, { Component } from 'react';
import './App.css';

import ContainerForm from './component/formulary/ContainerForm'
//third party libraries
import { connect } from 'react-redux';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ContainerForm  />
        </header>
      </div>
    );
  }
}



export default App;
