import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { fetch_tanks } from '../../actions/actions';


class TankList extends Component {

    componentDidMount() {
	this.props.dispatch(fetch_tanks());
    }

    render() {
	let rows = [];

	const tanks = this.props.tanks;

	if (tanks !== undefined) {
	    Object.keys(tanks).forEach(function (key) {
		let item = tanks[key];
		rows.push(
		    <tr key="{ item.id }">
			<td><Link to="/tanks/1">{ item.name }</Link></td>
			<td>{ item.volume }L</td>
		    </tr>
		);
	    });
	}

	return (
	    <table className="table">
		<thead>
		    <tr>
			<th>Name</th>
			<th>Volume</th>
		    </tr>
		</thead>
		<tbody>
		    { rows }
		</tbody>
	    </table>
	)
    }
}

TankList.propTypes = {
    tanks: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
    const { api } = state;
    const { tanks } = api;
    return { tanks };
};

export default connect(mapStateToProps)(TankList);
