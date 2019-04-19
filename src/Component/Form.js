import React, {Component} from 'react'

class Form extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            price: 0,
            imgurl: ''
        }
    }

    handleChanges = (e) => {
    const {name,value} = e.target
    this.setState({
        [name]: value
    })}
    cancelButton() {
        this.setState({
            name: '',
            price: 0,
            img: ''
        })
    }
    onClick = () => {
        let newProduct = this.state;
        this.props.add(newProduct)
    }
    render() {
       
        console.log(this.state)
        return (
            <div>
                <input   placeholder='image url' name='img' onChange={this.handleChanges}></input>
                <input   placeholder='name'name='name'onChange={this.handleChanges}></input>
                <input   placeholder='price'name='price'onChange={this.handleChanges}></input>
                <button className='button'onClick={this.cancelButton}>Cancel</button>
                <button className='button' onClick={this.onClick}>Add</button>
            </div>
        )
    }
}

export default Form