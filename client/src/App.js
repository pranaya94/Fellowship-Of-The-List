import React, { Component } from 'react';
import {Route}from 'react-router-dom';

import LoginForm from './Components/Login/LoginForm/LoginForm';
import Header from './Components/Header/Header';
import ToDo from './Components/ToDo/ToDo';
import RegisterForm from './Components/Register/RegisterForm/RegisterForm';

import './App.css';

class App extends Component {

  render() {

    return (
    	
	      <div className="App">	      		      		
	      		<Header />	 
	      		<Route path="/" exact component={LoginForm} />       		
				<Route path="/todo" exact component={ToDo} />	
				<Route path="/register" exact component={RegisterForm} /> 				   			      			     
	      </div>
	     
    );
  }
}

export default App;
