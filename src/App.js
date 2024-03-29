
import React, { Component } from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Navbar from './components/layout/navbar';
import Dashboard from './components/dashboard/dashboard';
import ProjectDetails from './components/projects/projectdetails';
import signin from './components/auth/signin';
import signup from './components/auth/signup';
import CreateProject from './components/projects/createproject'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
       <Navbar/>
          <Switch>
          <Route exact path='/' component={Dashboard}/>
          <Route path='/project/:id' component={ProjectDetails}/>
          <Route path='/signin' component={signin}/>
          <Route path='/signup' component={signup}/>
          <Route path='/create' component={CreateProject}/>
          </Switch>
      </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
