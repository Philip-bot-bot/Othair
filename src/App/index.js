import React, { Component } from 'react';
import './App.css';
import Welcomemessage from './Welcomemessage';
import AppLayout from './AppLayout';
import AppBar from './AppBar';
import { AppProvider } from './AppProvider';



class App extends Component {
 render () {
  return (
    <AppLayout>
    <AppProvider >
    <AppBar/>
    <Welcomemessage/>
    </AppProvider>
    </AppLayout>
  
);
    }
}

export default App;
