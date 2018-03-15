import React, {Component} from 'react';
import './Login.css';
import RegisterForm from '../Register/RegisterForm/RegisterForm';
import {Link} from 'react-router-dom';

class Login extends Component{

	constructor(props){

		super(props);
		this.state = {
			email : null,
			password : null,
		}
		this.handleInputChange = this.handleInputChange.bind(this); //bind to context of class since it is going to be executed in window context
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleInputChange(e){

		let targetField = e.target.name;
		this.setState({
			[targetField] : e.target.value //computed property name ES6
		})		 
											//stage changes are merged
	}

	

	handleSubmit(){

		let xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function(){

			if(this.readyState == 4 && this.status == 201){
				let token = JSON.parse(this.responseText);				
				window.localStorage.setItem('access_token',token['data']);
				window.location = '/ToDo'; // Check : refactor with React router
				
			}
		};

		xhttp.open('POST','/api/login',true);
		xhttp.setRequestHeader('Content-type','application/json');
		xhttp.send(JSON.stringify(this.state));
	}


	render(){

		return(							
					<div className = "Login">	
						<form className = "LoginForm">

							<div className = "form-group">
								<label>Email :</label>
								<input type = "email" className = "form-control" name = "email" onChange = {this.handleInputChange} required />
							</div>

							<div className = "form-group">
								<label>Password :</label>
								<input type = "password" className = "form-control" name = "password" onChange = {this.handleInputChange} required />
							</div>

							<div>
								<input type = "button" onClick = {this.handleSubmit} className = "btn btn-success" value = "Submit"/>
							</div>			
						    <div><Link to = "/register">New user? Register Here</Link></div> 
						</form>	
					 </div>				
			);
	}
}

export default Login;
