import React, {Component} from 'react';
import Header from '../Header/Header';
import Container from './Container/Container';


class ToDo extends Component{

	constructor(props){

		super(props);
	}

	render(){

		return(
						    <div>
						      <Header /> 
      						  <Container />   
      						</div>  

			);
	}
}

export default ToDo;