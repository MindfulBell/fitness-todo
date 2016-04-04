


export const ADD_EXERCISE = 'ADD_EXERCISE'
export function addExercise(exercise, sets){
	return {
		type: ADD_EXERCISE,
		exercise: exercise,
		sets: sets,
		complete: false,
		form: [] // this is where I will put 3 videos from youTube of proper form
	};
}

export const COMPLETE_EXERCISE = 'COMPLETE_EXERCISE';
export function completeExercise(key){
	return {
		type: COMPLETE_EXERCISE,
		key: key,
		complete: true
	};
}

export const REMOVE_EXERCISE = 'REMOVE_EXERCISE';
export function removeExercise(key){
	return {
		type: REMOVE_EXERCISE,
		key: key
	};
}