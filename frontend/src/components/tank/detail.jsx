import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class TankDetail extends Component {
    render() {
	console.log(this.props);
	return (
	    <h1>{ this.props.tank.name }</h1>
	)
    }
}

TankDetail.propTypes = {
    tankId: PropTypes.number.isRequired,
    tank: PropTypes.object.isRequired
}

const mapStateToProps = (state, ownProps) => {
    const { api } = state;
    const { tanks } = api;
    return {"tank": tanks[ownProps.tankId] };
};


export default connect(mapStateToProps)(TankDetail);