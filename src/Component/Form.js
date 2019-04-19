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
            imgurl: ''
        })
    }
    render() {
        let {name,price,imgurl} = this.state
        return (
            <div>
                <input  value={imgurl} name='img' onChange={this.handleChanges}></input>
                <input  value={name} name='product'onChange={this.handleChanges}></input>
                <input  value={price} name='price'onChange={this.handleChanges}></input>
                <button className='button'onCLick={this.cancelButton}>Cancel</button>
                <button className='button' onClick={this.props.add}>Add</button>
            </div>
        )
    }
}

export default Form