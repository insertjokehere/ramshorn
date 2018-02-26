import React, { Component } from 'react';
import TankList from '../tank/list';

class IndexPage extends Component {
    render() {
	return (
	    <div className="row">
		<div className="col-md-12">
		    <TankList />
		</div>
	    </div>
	)
    }
}

export default IndexPage;