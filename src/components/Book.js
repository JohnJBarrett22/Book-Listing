import React, { Component } from 'react';

export default class Book extends Component {
	render() {
		const { img, title, author } = this.props.info;
		return (
			<div>
				<img src={img} width="300px" alt="book" />
				<div>
					<h4>Title: {title}</h4>
					<h6>By: {author} </h6>
				</div>
			</div>
		);
	}
}
