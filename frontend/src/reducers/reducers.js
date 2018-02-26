import { combineReducers } from 'redux';
import { UPDATE_TANKS, UPDATE_TANK } from '../actions/actions';

const initialState = {
    tanks: {}
};

const api = (state = initialState, action) => {
    switch (action.type) {
	case UPDATE_TANKS:
	    let new_tanks = Object.assign({}, state.tanks);
	    action.tanks.forEach(function (item) {
		new_tanks[item.id] = item;
	    });
	    return Object.assign({}, state, {
		tanks: new_tanks
	    });
	case UPDATE_TANK:
	    let new_tank = Object.assign({}, state.tanks);
	    new_tank[action.tank.id] = action.tank;
	    return Object.assign({}, state, {
		tanks: new_tank
	    });
	default:
	    return state;
    }
};

export default combineReducers({
    api
});
