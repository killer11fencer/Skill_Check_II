import React, {Component} from 'react'

class Dashboard extends Component {
    render () {
        let displayArray = this.props.info.map((elem,index)=>
        { return <div key={index}>
        <img src={elem.img} alt='product'/><h3>{elem.name}</h3>
        <h3>{elem.price}</h3>
        <button className='button' onClick={e=> this.props.delete(elem.id)}>Delete</button>
        <button className='button' onClick={e=> this.props.edit(elem.id)}>Edit</button>
        </div>})

        return (
        <div>
            {displayArray}
        </div>)
    }
}
export default Dashboard