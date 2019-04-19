import React, { Component } from 'react';
import Axios from 'axios'
// import { HashRouter, Route } from 'react-router-dom'
import Dashboard from './Component/Dashboard'
import Form from './Component/Form'
import Header from './Component/Header'
// import Product from './Component/Product'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      inventory: [],


    }
  }
  componentDidMount() {
    
    Axios.get('/api/products').then(res => {
      this.setState({ inventory: res.data })
    }).catch(err => console.log('err on get', err))
  }
    addNew = (newProduct) => {
      Axios.post('/api/products', newProduct).then(res => {
        this.setState({ inventory: res.data })
      }).catch(err => console.log('err', err))
    }
    deleteProduct = (id) => {
      Axios.delete(`/api/products/${id}`).then(res => {
        this.setState({ inventory: res.data })
      }).catch(err => console.log('err', err))  
    }
    updateProduct = (updatedProduct) => {
      Axios.put(`/api/products/${updatedProduct.id}`,updatedProduct).then(res => {
        this.setState({ inventory: res.data })
      }).catch(err => console.log('err', err))  
    }
  

  render() {
  
    let addButton = this.addNew;
    console.log('inventory of the state',this.state.inventory)

    return (
      <div className="App">
        <Header/>
        <Dashboard/>
        <Form add={addButton} />

      </div>
    )
  }
}

export default App;
