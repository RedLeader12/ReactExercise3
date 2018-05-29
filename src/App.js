import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom'

import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';

class App extends Component {
  render () {
    return (
      <div className="App">
        <ol style={{textAlign: 'left'}}>
          <ul><NavLink to="/users">Users</NavLink> </ul> 
          <ul><NavLink to="/courses">Courses</NavLink> </ul> 
          <li> </li> 
        </ol>
        <Route path="/users" exact component={Users}/> 
        <Route path="/courses" component={Courses}/> 
      </div>
    );
  }
}

export default App;
