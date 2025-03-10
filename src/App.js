import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {
	handleOnClick = () => {
		this.props.dispatch({
			type: 'INCREASE_COUNT',
		});
	}

	render() {
		return (
			<div className="App">
				<button onClick={this.handleOnClick}>Click</button>
				<p>{this.props.clicks}</p>
			</div>
		);
	}
	
}

const mapStateToProps = (state) => {
	return { clicks: state.clicks };
};
  
export default connect(mapStateToProps)(App);

