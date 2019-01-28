import React, { Component } from 'react';

// class Main extends Component {
// 	render() {
// 		return (
// 			<div>
// 				<form method="post">
// 					<input type="text" className="textbox" placeholder="Search" />
// 					<input title="Search" value="" type="submit" className="button" />
// 				</form>
// 			</div>
// 		);
// 	}
// }

// export default Main;

import SearchBar from 'material-ui-search-bar';
import { AutoComplete } from 'material-ui/AutoComplete';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
class Main extends Component {
	render() {
		return(
			<MuiThemeProvider>
				<SearchBar
					onChange={() => console.log('onChange')}
					onRequestSearch={() => console.log('onRequestSearch')}
					style={{
						margin: '0 auto',
						maxWidth: 800
					}}
				/>
			</MuiThemeProvider>
		)
	}
}

export default Main;