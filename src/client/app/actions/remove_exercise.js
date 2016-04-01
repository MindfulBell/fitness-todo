export const REMOVE_EXERCISE = 'REMOVE_EXERCISE'

export function removeExercise(key){
	return {
		type: REMOVE_EXERCISE,
		key: key
	};
}