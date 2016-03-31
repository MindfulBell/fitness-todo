import { combineReducers } from 'redux';
import ExerciseReducer from './reducer_exercise';

const rootReducer = combineReducers({
	exercises: ExerciseReducer
})

export default rootReducer