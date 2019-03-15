import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for routes
import Home from '../routes/home';
import Detail from '../routes/detail';
import Profile from '../routes/profile';

export default class App extends Component {
	
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
				<Header />
				<Router onChange={this.handleRoute}>
					{/*<Home URL="https://rest-in-node.herokuapp.com/last-fm" path="/" />*/}
					<Home path="/" />
					<Detail path="/album/" />
					<Profile path="/profile/" user="me" />
					<Profile path="/profile/:user" />
					<Detail path="/album/:artist/:album" />
				</Router>
			</div>
		);
	}
}
