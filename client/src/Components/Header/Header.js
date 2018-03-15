import React, { Component } from 'react';
import './header.css';

class Header extends Component{


	render(){
		return(
			<div className = "Header">
				<div className = "logo"><h1><span>Fellowship Of The List</span></h1></div>
				<ul className = "navlist">
					<li className = "navitem"><a href="#">Logout</a></li>			
				</ul>
			</div>
			);
	}
		
}

export default Header;