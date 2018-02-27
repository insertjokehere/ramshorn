import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FloraList extends Component {

    render() {
	let objs = [];

	this.props.flora.forEach(function (item) {
	    objs.push(
		<tr>
		    <td>{item.genus}</td>
		    <td>{item.species}</td>
		    <td>{item.variant}</td>
		</tr>
	    )
	});
	
	return (
	    <table className="table">
		<thead>
		    <th></th>
		    <th></th>
		    <th></th>
		</thead>
		<tbody>
		    { objs }
		</tbody>
	    </table>
	)
    }
}

FloraList.propTypes = {
    flora: PropTypes.array.isRequired
}

export default FloraList