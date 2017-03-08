import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import NameContainer from './Components/NameContainer'
import PairContainer from './Components/PairContainer'
import AppHeader from './Components/AppHeader'
import Footer from './Components/Footer'

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
