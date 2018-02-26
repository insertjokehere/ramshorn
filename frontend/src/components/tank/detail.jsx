import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetch_tank } from '../../actions/actions';

class TankDetail extends Component {

    componentDidMount() {
	this.props.dispatch(fetch_tank(this.props.tankId));
    }

    render() {
	if (this.props.tank === undefined) {
	    return (
		<h3>Loading</h3>
	    )
	} else {
	    return (
		<div>
		    <h1>{ this.props.tank.name }</h1>
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