import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import NameContainer from './components/NameContainer'
import PairContainer from './components/PairContainer'
import AppHeader from './components/AppHeader'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader />
        <NameContainer />
        <PairContainer />
        <Footer />
      </div>
    );
  }
}

export default App;
