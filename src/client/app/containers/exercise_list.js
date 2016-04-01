import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeExercise } from '../actions/remove_exercise';
import { bindActionCreators } from 'redux';

class ExerciseList extends Component {	
	constructor(props){
		super(props)

		this.state={

		}
	}

	onRemoveClick(event){
		this.props.removeExercise(event.target.parentNode.parentNode.id) // more elegant way to do this?
	}

	render() {
		const exerciseGroup = this.props.exercises.map((data, ind) => {		
			return (
			<tr key={ind} id={ind}>
				<td>{data.exercise}</td>
				<td>{data.sets}</td>
				<td>
					<i style={{color: 'green'}} 
					className="fa fa-2x fa-check-circle-o" 
					onClick={this.markComplete}>
					</i> 

					<i style={{color: 'red'}} 
					className="fa fa-2x fa-times" 
					onClick={this.onRemoveClick.bind(this)}>
					</i>
				</td>
			</tr>
			)
		});

		return(
			<div className='container' style={{width: '60%', paddingTop: '25px'}}>
				<table className='table table-hover'>
					<thead>
						<tr>
							<th>Exercise Name</th>
							<th>Sets?</th>
							<th>Complete / Remove</th>
						</tr>
					</thead>
					<tbody>
						{exerciseGroup}
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

function mapDispatchToProps(dispatch){
	return bindActionCreators({ removeExercise }, dispatch)
	//how would I do this without bindActionCreators??
}

export default connect(mapStateToProps, mapDispatchToProps)(ExerciseList);

// left off: markComplete function (make it part of state?), add youTube vids!, styling!