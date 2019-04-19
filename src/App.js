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
      button: 'Add to Inventory',
      editIndex: 0,
      editId: 0


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
    editButton = (index,id) =>
    this.setState({
    button:'Save Changes',
    editIndex: index,
      editId: id
  })

  render() {
    
  let {inventory, button, editIndex, editId} = this.state;
    let addButton = this.addNew;
    let edit = this.editButton;
    console.log('inventory of the state',this.state.inventory)

    return (
      <div className="App">
        <Header/>
        <Dashboard info={inventory} edit={edit} delete={this.deleteProduct}/>
        <Form add={addButton} index={editIndex} id={editId} update={this.updateProduct} info={inventory} button={button} />

      </div>
    )
  }
}

export default App;
