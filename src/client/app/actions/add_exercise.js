export const ADD_EXERCISE = 'ADD_EXERCISE'

export function addExercise(exercise, sets){

	return {
		type: ADD_EXERCISE,
		exercise: exercise,
		sets: sets
	};
}