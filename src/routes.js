import React from 'react'
import Form from './Component/Form'
import App from './App'
import Dashboard from './Component/Dashboard'
import Edit from './Component/Edit'
import {Switch, Route} from 'react-router-dom'

export default (
    <Switch>
        <Route exact path='/' component={App}/>
        <Route path='/api/inventory' component={Dashboard}/>
        <Route path='/api/add' component={Form}/>
        <Route path='/api/edit/:id' component={Edit}/>
    </Switch>
)