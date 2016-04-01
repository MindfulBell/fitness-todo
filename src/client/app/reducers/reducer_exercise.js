import { ADD_EXERCISE } from '../actions/add_exercise';
import { REMOVE_EXERCISE } from '../actions/remove_exercise';

export default function (state = [], action) {
	switch(action.type) {
		case ADD_EXERCISE: 
			return [{exercise: action.exercise, sets: action.sets}, ...state]
		case REMOVE_EXERCISE:
			return state.filter((_, ind, state)=>{
				return ind !== +action.key //make it an int real quick
			})
	}
	return state
}