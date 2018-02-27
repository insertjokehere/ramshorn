import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FloraList extends Component {

    render() {
	let objs = [];

	this.props.flora.forEach(function (item) {
	    objs.push(
		<li>{item.genus} {item.species}</li>
	    )
	});
	
	return (
	    <ul>
		{ objs }
	    </ul>
	)
    }
}

FloraList.propTypes = {
    flora: PropTypes.array.isRequired
}

export default FloraList