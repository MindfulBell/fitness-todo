import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeExercise } from '../actions/index';
import { completeExercise } from '../actions/index';
import { bindActionCreators } from 'redux';
import ExerciseList from '../components/exercise_list';


const mapStateToProps = (state) => {
	return {
		exercises: state.exercises
	};
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ removeExercise, completeExercise }, dispatch)
}

const ContainerExerciseList = connect(mapStateToProps, mapDispatchToProps)(ExerciseList)

export default ContainerExerciseList;

