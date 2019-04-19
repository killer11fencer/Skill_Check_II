import React, {Component} from 'react'

class Form extends Component {
    constructor() {
        super();
        
        this.state = {
            name: '',
            price: 0,
            img: ''
            
        }
        this.cancelButton = this.cancelButton.bind(this);
    }
   
    handleChanges = (e) => {
    const {name,value} = e.target
    this.setState({
        [name]: value
    })}

    cancelButton () {
        this.setState({
            name: '',
            price: 0,
            img: ''
        })
    }
    onClick = () => {
        if(!this.state.img) {
            this.setState({
                img: 'https://cdn1.thr.com/sites/default/files/imagecache/landscape_928x523/2018/06/gettyimages-976088928.jpg'
            })
        }
        let newProduct = this.state;
        this.props.add(newProduct)
    }
    render() {
       
       
        return (
            <div>
                <input  value={this.state.img} placeholder='image url' name='img' onChange={this.handleChanges}></input>
                <input  value={this.state.name} placeholder='name'name='name'onChange={this.handleChanges}></input>
                <input  value={this.state.price} placeholder='price'name='price'onChange={this.handleChanges}></input>
                <button className='button'onClick={this.cancelButton}>Cancel</button>
                <button className='button' onClick={this.onClick}>Add</button>
            </div>
        )
    }
}

export default Form