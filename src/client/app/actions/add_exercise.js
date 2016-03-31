export const ADD_EXERCISE = 'ADD_EXERCISE'

export function addExercise(exercise){

	return {
		type: ADD_EXERCISE,
		exercise: exercise
	};
}