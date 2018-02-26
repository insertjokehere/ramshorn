import { showLoading, hideLoading } from 'react-redux-loading-bar'

export const UPDATE_TANKS = "UPDATE_TANKS";
export const UPDATE_TANK = "UPDATE_TANK";

function updateTanks(tanks) {
    return {
	type: UPDATE_TANKS,
	tanks: tanks
    }
}

function updateTank(data) {
    return {
	type: UPDATE_TANK,
	tank: data
    }
}

export function fetch_tanks(){
    return function(dispatch, getState) {
	dispatch(showLoading())
	fetch('/api/tank/',
	      {
		  headers: {
		      'Content-Type': 'application/json'
		  },
		  credentials: 'same-origin'
	      }
	).then(
	    function(response) {
		if (response.status === 200) {
		    response.json().then(function(data) {
			dispatch(updateTanks(data))
			dispatch(hideLoading())
		    })
		}
	    }
	)
    }
}

export function fetch_tank(tank_id){
    return function(dispatch, getState) {
	dispatch(showLoading())
	fetch('/api/tank/' + tank_id,
	      {
		  headers: {
		      'Content-Type': 'application/json'
		  },
		  credentials: 'same-origin'
	      }
	).then(
	    function(response) {
		if (response.status === 200) {
		    response.json().then(function(data) {
			dispatch(updateTank(data))
			dispatch(hideLoading())
		    })
		}
	    }
	)
    }
}
