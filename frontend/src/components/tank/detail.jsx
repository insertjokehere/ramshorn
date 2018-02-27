import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetch_tank } from '../../actions/actions';

import FloraList from '../flora/list'


class TankDetail extends Component {

    componentDidMount() {
	this.props.dispatch(fetch_tank(this.props.tankId));
    }

    render() {
	if (this.props.tank === undefined) {
	    return (
		<div></div>
	    )
	} else {
	    var flora;
	    if (this.props.tank.flora !== undefined) {
		flora = this.props.tank.flora;
	    } else {
		flora = []
	    }

	    return (
		<div>
		    <h1>{ this.props.tank.name }</h1>
		    <h2>Flora</h2>
		    <FloraList flora={ flora } />
		    { JSON.stringify(this.props) }
		</div>
	    )
	}
    }
}

TankDetail.propTypes = {
    tankId: PropTypes.string.isRequired,
    tank: PropTypes.object
}

const mapStateToProps = (state, ownProps) => {
    const { api } = state;
    const { tanks } = api;
    return {"tank": tanks[ownProps.tankId] };
};


export default connect(mapStateToProps)(TankDetail);