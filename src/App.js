import React, { Component } from 'react';
import Axios from 'axios'
import {HashRouter,Route} from 'react-router-dom'
import Dashboard from './Component/Dashboard'
import Form from './Component/Form'
import Header from './Component/Header'
import Product from './Component/Product'
import './App.css';

class App extends Component {
  constructor () {
    super();
    this.state = {
      inventory: [],
    

    }
  }
  addButton (){}

  render() {
    let addButton = this.addButton;

    return (
      <div className="App">
      <Form add={addButton}/>
      </div>
    )
  }
}

export default App;
