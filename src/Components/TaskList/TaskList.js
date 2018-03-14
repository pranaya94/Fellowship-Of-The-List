import React, {Component} from 'react';
import TaskItem from '../TaskItem/TaskItem';

import './TaskList.css';

class TaskList extends Component{

	render(){
		return(
				<ul className = "TaskList">
					<TaskItem />
				</ul>
			);
	}
}

export default TaskList;