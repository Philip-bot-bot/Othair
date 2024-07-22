import React, { Component } from 'react';
import './App.css';
import Welcomemessage from './Welcomemessage';
import Applayout from './AppLayout';
import AppBar from './AppBar';



class App extends Component {
 render () {
  return (
    <Applayout>
    <AppBar/>
    <Welcomemessage/>
    </Applayout>
  
);
    }
}

export default App;
