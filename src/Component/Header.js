import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Header extends Component {
    render () {
        return(
            <div>
                <Link to='/api/inventory'><button>Dashboard</button></Link>
                <Link to='/api/add'><button>Add New</button></Link>
            </div>
        )
    }
}

export default Header