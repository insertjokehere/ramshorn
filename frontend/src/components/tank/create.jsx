import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { create_tank } from '../../actions/actions';


class TankCreate extends Component {

    constructor(props) {
	super(props);
	this.state = {
	    name: "",
	    width: "",
	    depth: "",
	    length: ""
	};

	this.handleCreate = this.handleCreate.bind(this);
    }

    handleCreate(e) {
	e.preventDefault();
	this.props.dispatch(
	    create_tank(this.state)
	).then(
	    function () {
		console.log(this)
	    }
	)
    }

    handleUpdate(value) {
	var component = this;
	return function(e) {
	    console.log(value)
	    console.log(e.target.value)
	    console.log(component.state)
	    var newState = {}
	    newState[value] = e.target.value
	    component.setState(newState);
	}
    }

    render() {
	return (
	    <form>
		<div className="form-group">
		    <label htmlFor="newTankName"><h2>Name</h2></label>
		    <input className="form-control field-name form-control-lg" id="newTankName" value={ this.state.name } onChange={ this.handleUpdate("name") } />
		</div>
		<div className="form-group">
		    <label htmlFor="newTankName">Dimensions</label>
		    <div className="input-group">
			<input className="form-control field-width" id="newTankWidth" placeholder="Width" value={ this.state.width } onChange={ this.handleUpdate("width") } />
			<div className="input-group-append">
			    <span className="input-group-text input-group-prepend">x</span>
			</div>
			<input className="form-control field-length" id="newTankLength" placeholder="Length" value={ this.state.length } onChange={ this.handleUpdate("length") } />
			<div className="input-group-append input-group-prepend">
			    <span className="input-group-text">x</span>
			</div>
			<input className="form-control field-depth" id="newTankDepth" placeholder="Depth" value={ this.state.depth } onChange={ this.handleUpdate("depth") } />
		    </div>
		</div>
		<button type="submit" className="btn btn-primary" onClick={ this.handleCreate }>Create</button>
	    </form>
	)
    }
}


const mapStateToProps = (state) => {
    return {}
};

export default connect(mapStateToProps)(TankCreate)
