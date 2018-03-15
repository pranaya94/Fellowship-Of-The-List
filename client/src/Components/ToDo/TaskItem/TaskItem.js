import React, {Component} from 'react';
import './TaskItem.css';

class TaskItem extends Component{


	componentDidMount(){

	}

	render(){		
		// console.log("props" + this.props.tasks);
		const tasksArray = this.props.tasks;
		console.log("array",tasksArray);
		const listItems = tasksArray.map((task) => 

				<li className = "TaskItem" key={task['taskid']}>{task['taskdata']}<i className = "delete far fa-trash-alt"></i></li>

				);

		return(
				<ul className = "todo">
					{listItems}
				</ul>
			);
	}
}

export default TaskItem;