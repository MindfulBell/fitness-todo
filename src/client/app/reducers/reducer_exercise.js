import { ADD_EXERCISE } from '../actions/index';
import { REMOVE_EXERCISE } from '../actions/index';
import { COMPLETE_EXERCISE } from '../actions/index';

export default function (state = [], action) {
	switch(action.type) {
		case ADD_EXERCISE: 
			return [...state, {
				exercise: action.exercise, 
				sets: action.sets, 
				complete: action.complete}
				]

		case REMOVE_EXERCISE:
			return state.filter((_, ind) => {
				return ind !== +action.key //make it an int real quick
			})

		case COMPLETE_EXERCISE:
			return state.map((exercise, ind) => {
				return ind === +action.key ? 
				Object.assign(exercise, {complete: action.complete})
				 : exercise
			})
			//create a new state array with the appropriate exercise (use key) marked as complete
	}
	return state
}

// What is a good way to test your reducer function? Where can I console log?