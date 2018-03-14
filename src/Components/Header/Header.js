import React, { Component } from 'react';
import './header.css';

class Header extends Component{


	render(){
		return(
			<div className = "Header">
				<div className = "logo"><h1><span>To Do or Not To Do</span></h1></div>
				<ul className = "navlist">
					<li className = "navitem"><a href="#">Logout</a></li>			
				</ul>
			</div>
			);
	}
		
}

export default Header;