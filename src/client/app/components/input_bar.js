import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addExercise } from '../actions/index';
import { bindActionCreators } from 'redux';

class InputBar extends Component {
	constructor(props){
		super(props)

		this.state = {term: '', sets: ''}

		this.onInputChange = this.onInputChange.bind(this);
		this.onButtonSubmit = this.onButtonSubmit.bind(this);
		this.onSetChange = this.onSetChange.bind(this);
	}

	onInputChange(event){
		this.setState({
			term: event.target.value
		})
	}

	onSetChange(event){
		this.setState({
			sets: event.target.value
		})
	}

	onButtonSubmit(){
		event.preventDefault();

		this.props.addExercise(this.state.term, this.state.sets)

		this.setState({
			term: '',
			sets: ''
		})

		//function to add exercise to list
		//potentially query YouTube to pull up vids?
	}

	render(){

		return(
			<div className='container' style={{width: '80%', textAlign: 'center'}}>
				<form className='input-group' style={{width: '100%'}}>
					<input className='form-control input-lg'
					type='text'
					value={this.state.term}
					placeholder='Type an exercise to add to your workout...'
					onChange={this.onInputChange}
					/>
					<input className='form-control input-lg'
					type='text'
					value={this.state.sets}
					placeholder='How many sets?'
					onChange={this.onSetChange}
					/>
				</form>		
				<button className='btn btn-lg'
					onClick={this.onButtonSubmit}>
					Add Exercise!
				</button>
			</div>

		)
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({ addExercise }, dispatch) // magic
}

export default connect(null, mapDispatchToProps)(InputBar); // this is magic to me