import React, { Component } from 'react';

//Logo
import logo from '../logo.png';

//Components
import SearchBar from '../components/searchbar';

//CSS
import '../css/main.css'

class Main extends Component {
	render() {
		return (
			<div className="main-div">
				<img src={logo} alt="Logo" height="300"/>
				<SearchBar/>
			</div>
		);
	}
}

export default Main;