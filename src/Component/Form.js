import React, {Component} from 'react'

class Form extends Component {
    constructor() {
        super();
        
        this.state = {
            name: '',
            price: 0,
            img: '',
            button: 'Add to Inventory',
            id: 0
            
            
        }
        this.cancelButton = this.cancelButton.bind(this);
    }
   componentDidUpdate(prevProp) {
      
       if(this.props.button !== prevProp.button) {
        this.setState({
            name: this.props.info[this.props.index].name,
            price: this.props.info[this.props.index].price,
            img: this.props.info[this.props.index].img,
            id: this.props.id,
            button: 'Save Changes'
        })
       }
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
            img: '',
            id: 0,
            button: 'Add to Inventory'
        })
    }
    onClick = () => {
        let product = this.state;
        
        console.log('WHERE IS MY IMAGE', product)
        if(!this.state.img) {
            this.setState({ img:'https://cdn.vox-cdn.com/thumbor/E002q8xD7eWnDAgObYgwYXtuL58=/81x0:967x591/1200x800/filters:focal(81x0:967x591)/cdn.vox-cdn.com/uploads/chorus_image/image/46711910/supermanlives2.0.0.jpg'})
        }
        if(this.state.button === 'Save Changes') { 
            this.props.update(product)
        }
        if(this.state.button === 'Add to Inventory')
        this.props.add(product)
    }
    render() {
       
       
        return (
            <div>
                <input  value={this.state.img} placeholder='image url' name='img' onChange={this.handleChanges}></input>
                <input  value={this.state.name} placeholder='name'name='name'onChange={this.handleChanges}></input>
                <input  value={this.state.price} placeholder='price'name='price'onChange={this.handleChanges}></input>
                <button className='button'onClick={this.cancelButton}>Cancel</button>
                <button className='button' onClick={this.onClick}>{this.state.button}</button>
            </div>
        )
    }
}

export default Form