import React, { Component } from 'react';
import TankDetail from '../tank/detail';
import { connect } from 'react-redux';

class TankDetailPage extends Component {
    render() {
	return (
	    <div className="row">
		<div className="col-md-12">
		    <TankDetail tankId={ this.props.match.params.tankId } />
		</div>
	    </div>
	)
    }
}

const mapStateToProps = (state) => {
    return {}
};

export default connect(mapStateToProps)(TankDetailPage);
