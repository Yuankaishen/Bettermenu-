import React, { Component } from 'react';

class Main extends Component {
	render() {
		return (
			<div>
				<form method="post">
					<input type="text" className="textbox" placeholder="Search" />
					<input title="Search" value="" type="submit" className="button" />
				</form>
			</div>
		);
	}
}

export default Main;