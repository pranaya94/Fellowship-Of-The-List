import React, {Component} from 'react';
import TaskItem from '../TaskItem/TaskItem';

import './TaskList.css';

class TaskList extends Component{

	constructor(){

		super();

		this.state = {
			tasks : []
		};
	}

	getTasks(){

		  let xhttp = new XMLHttpRequest();
		  xhttp.onreadystatechange = function(){
		   
		    if(xhttp.readyState === 4 && xhttp.status === 200){

					 let tasksArray = JSON.parse(xhttp.responseText);					 		          	 
		          	 console.log("response came");
		      	 		this.setState({
		      	 		tasks : tasksArray
		      	 				});
		      	 				  		          	 
		    }		    
		  }.bind(this);

		  xhttp.open('GET','/api/todo/tasks',true);
		  // let token = window.localStorage.getItem('access_token');
		  // xhttp.setRequestHeader('Authorization', 'Bearer ' + token);
		  xhttp.send();
		  console.log("request sent");

		}


	componentDidMount(){

			this.getTasks();

	}

	render(){		
		return(
				<div className = "TaskList">					
					<TaskItem tasks = {this.state.tasks} />
				</div>
			);
	}
}

export default TaskList;