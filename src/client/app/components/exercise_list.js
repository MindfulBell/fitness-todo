import React, { Component } from 'react';
import { connect } from 'react-redux';

import Exercise from './exercise.js';

class ExerciseList extends Component {

	render() {
		const exercises = this.props.exercises.map((exercise, ind) => {
			return <tr key={ind}>
			<td>{exercise}</td>
			<td><input type='text' /></td>
			</tr>
		})
		return(
			<div className='container'>
				<table className='table table-hover'>
					<thead>
						<tr>
							<th>Exercise Name</th>
							<th>Sets</th>
							<th>Reps</th>
						</tr>
					</thead>
					<tbody>
							{exercises}
					</tbody>
				</table>
			</div>
		)
	}
}

function mapStateToProps(state){
	//whatever is returned from here, shows up as props in exercise_list
	return {
		exercises: state.exercises
	};
}

export default connect(mapStateToProps)(ExerciseList);