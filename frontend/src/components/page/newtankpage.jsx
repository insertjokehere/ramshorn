import React, { Component } from 'react';
import TankCreate from '../tank/create';

class NewTankPage extends Component {
    render() {
	return (
	    <div className="row">
		<div className="col-md-1"></div>
		<div className="col-md-10">
		    <h1>Create Tank</h1>
		    <div className="card">
			<div className="card-body">
			    <TankCreate />
			</div>
		    </div>
		</div>
		<div className="col-md-1"></div>
	    </div>
	)
    }
}

export default NewTankPage;