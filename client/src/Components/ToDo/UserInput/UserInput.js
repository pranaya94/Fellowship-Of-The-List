import React, {Component} from 'react';
import './UserInput.css';

class UserInput extends Component{

	render(){

		return(
				<div className = "UserInput">			
					<input className = "inputBox" type = "text" placeholder = "Enter task"></input>
					<i className="add fas fa-plus-circle"></i>					
				</div>
			);
	}

}

export default UserInput;