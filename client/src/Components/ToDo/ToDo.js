import React, {Component} from 'react';
import Header from '../Header/Header';
import TaskItem from './TaskItem/TaskItem';
import UserInput from './UserInput/UserInput';

import './ToDo.css';

class ToDo extends Component{

	constructor(props){
		super(props);
		this.state = {
			tasks : []
		}
	}

	componentDidMount(){

		this.getTasksFromServer((tasksArray) => {
			this.setState({
				tasks : tasksArray
						 });
			console.log(this.state);
		});		
	}


	getTasksFromServer(updateState){

	  var xhttp = new XMLHttpRequest();
	  xhttp.onreadystatechange = function(){
	   
	    if(this.readyState == 4 && this.status == 200){
	          let tasksArray = JSON.parse(this.responseText);	
	          updateState(tasksArray);         
	    	}
	   };
	  xhttp.open('GET','/api/todo/tasks',true); 
	  let token = window.localStorage.getItem('access_token');
	  xhttp.setRequestHeader('Authorization', 'Bearer ' + token);
	  xhttp.send();
	}

 // <Container tasks={JSON.stringify(this.state.tasks)} />   

	render(){
		return(
						   	<div className = "asdf"> 
						    	<div className = "ToDo">      						
      								<UserInput />
									<TaskItem tasks = {this.state.tasks}/>
      							</div> 
      						</div> 

			);
	}
}

export default ToDo;