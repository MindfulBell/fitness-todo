import { combineReducers } from 'redux';
import ExerciseReducer from './reducer_exercise';

const rootReducer = combineReducers({
	exercises: ExerciseReducer //[{exercise: pushup, sets: 2},{exericse: pullup, sets: 3}]
})

export default rootReducer