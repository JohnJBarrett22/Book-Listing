import React, { Component } from 'react';

export default class Book extends Component {
	constructor(props) {
		super(props);
	}
	state = {
		count: 0
	};

	handleClick = () => {
		console.log('You Clicked Me!');
		console.log(this.state.count);
	};

	render() {
		const { img, title, author } = this.props.info;
		return (
			<div className="book">
				<img src={img} width="300px" alt="book" />
				<div>
					<h4>Title: {title}</h4>
					<h6>By: {author} </h6>
					<button onClick={this.handleClick}>Add Count</button>
				</div>
			</div>
		);
	}
}
