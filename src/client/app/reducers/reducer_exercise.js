import { ADD_EXERCISE } from '../actions/add_exercise';

export default function (state = [], action) {
	switch(action.type) {
		case ADD_EXERCISE: 
			return [ action.exercise, ...state ];
	}
	return state
}
