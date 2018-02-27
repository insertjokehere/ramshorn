import React, { Component } from 'react';
import TankList from '../tank/list';
import { Link } from 'react-router-dom'

class IndexPage extends Component {
    render() {
	return (
	    <div className="row">
		<div className="col-md-12">
		    <TankList />
		    <button type="button" class="btn btn-primary">
			<Link to="/tank">Add</Link>
		    </button>
		</div>
	    </div>
	)
    }
}

export default IndexPage;