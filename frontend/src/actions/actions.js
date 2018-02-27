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

var csrfCookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)csrftoken\s*\=\s*([^;]*).*$)|^.*$/, "$1");

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
		dispatch(hideLoading())
		if (response.status === 200) {
		    response.json().then(function(data) {
			dispatch(updateTanks(data))
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
		dispatch(hideLoading())
		if (response.status === 200) {
		    response.json().then(function(data) {
			dispatch(updateTank(data))
		    })
		}
	    }
	)
    }
}

export function create_tank(data) {
    return function(dispatch, getState) {
	dispatch(showLoading())
	return fetch('/api/tank/',
	      {
		  method: 'POST',
		  headers: {
		      'Content-Type': 'application/json',
		      'X-CSRFToken': csrfCookieValue
		  },
		  credentials: 'same-origin',
		  body: JSON.stringify(data)
	      }
	).then(
	    function(response) {
		dispatch(hideLoading())
		if (response.status === 201) {
		    return response.json().then(function(data) {
			return dispatch(updateTank(data))
		    })
		}
	    }
	)
    }
}