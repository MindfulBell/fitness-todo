import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addExercise } from '../actions/add_exercise';
import { bindActionCreators } from 'redux';

class InputBar extends Component {
	constructor(props){
		super(props)

		this.state = {term: ''}

		this.onInputChange = this.onInputChange.bind(this);
		this.onButtonSubmit = this.onButtonSubmit.bind(this);
	}

	onInputChange(event){
		this.setState({
			term: event.target.value
		})
	}

	onButtonSubmit(){
		event.preventDefault();

		this.props.addExercise(this.state.term)

		this.setState({
			term: ''
		})

		//function to add exercise to list
		//potentially query YouTube to pull up vids?
	}

	render(){

		return(
			<div className='container' style={{width: '100%', textAlign: 'center'}}>
				<form className='input-group' style={{width: '100%'}}>
					<input className='form-control input-lg'
					type='text'
					value={this.state.term}
					placeholder='Type an exercise to add to your workout...'
					onChange={this.onInputChange}
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