import React, {Component} from 'react'

class Form extends Component {
    constructor() {
        super();
        
        this.state = {
            name: '',
            price: 0,
            img: '',
            button: 'Add to Inventory',
            
            
        }
        this.cancelButton = this.cancelButton.bind(this);
    }
   componentDidUpdate(prevProp) {
       console.log('PROPS')
       if(this.props.button !== prevProp.button) {
        this.setState({
            name: this.props.info[this.props.id].name,
            price: this.props.info[this.props.id].price,
            img: this.props.info[this.props.id].img,
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
            button: 'Add to Inventory'
        })
    }
    onClick = () => {
        let product = this.state;
        if(!this.state.img) {
            this.setState({img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/WelshCorgi.jpeg/220px-WelshCorgi.jpeg'})
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