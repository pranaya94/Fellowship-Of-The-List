import React, {Component} from 'react';
import './TaskItem.css';

class TaskItem extends Component{

	constructor(props){

		super(props);
	}

	render(){		

		let tasksArray = this.props.tasks;
		console.log("props" + tasksArray);
		const listItems = tasksArray.map((task) => 

				<li className = "TaskItem" key={task['taskid']}>{task['taskdata']}<i className = "delete far fa-trash-alt"></i></li>

				);

		return(
				<div className = "Container">
					<ul className = "todo">
						{listItems}
					</ul>
				</div>
			);
	}
}

export default TaskItem;