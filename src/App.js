import React from 'react';
import './App.css';
import Home from './components/Home';
import SingleRoom from './components/SingleRoom';
import Rooms from './components/Rooms';
import {Route, Switch, Redirect} from 'react-router-dom';
import Error from './components/Error'; 
import NavBar from './components/NavBar';


function App() {
  return (
    <>
      <NavBar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path ="/rooms" component={Rooms}/>
        <Route exact path="/rooms/:slug" component={SingleRoom}/>
        <Route component={Error}/>
        <Redirect to='/' />

        </Switch>
    </>
  );
}

export default App;
