export const UPDATE_TANKS = "UPDATE_TANKS";

function updateTanks(tanks) {
    return {
	type: UPDATE_TANKS,
	tanks: tanks
    }
}

export function fetch_tanks(){
    return function(dispatch, getState) {
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
		    })
		}
	    }
	)
    }
}
