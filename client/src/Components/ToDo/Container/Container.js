import React, {Component} from 'react';

import UserInput from '../UserInput/UserInput';
import TaskList from '../TaskList/TaskList';

import './Container.css';

class Container extends Component{

	render(){

			return(
						<div className="Container">
							<UserInput />
							<TaskList/>
						</div>
				  );
	}
}

export default Container;