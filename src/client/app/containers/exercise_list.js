import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeExercise } from '../actions/index';
import { completeExercise } from '../actions/index';
import { bindActionCreators } from 'redux';
import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyCNU9dpBdkTFsPHxgEkVehkPqz_V0innwc'




class ExerciseList extends Component {	
	constructor(props){
		super(props)
		this.state={
			formVideos: []
		}
	}
	onToggle(event){
		const id = event.target.parentNode.parentNode.id;
		event.target.id === 'remove' ? 
		this.props.removeExercise(id) :
		this.props.completeExercise(id);
		// more elegant way to do this?
		// grabbing id (established below in tr) of the element clicked in order to remove it
	}

	onVideoSearch(term){
		// click on video icon next to exercise, query youtube, bring up vids
		YTSearch({key: API_KEY, term: term}, (data)=>{
			this.setState({
				formVideos: data
			})
		})
	}

	render() {
		const exerciseGroup = this.props.exercises.map((data, ind) => {		
			return (
			<tr key={ind} id={ind} style={data.complete === true ? 
				{backgroundColor: 'lightblue', textDecoration: 'line-through'}:{}}>
				<td>
				{data.exercise}
				<i style={{color: 'blue'}} 
						id='form'
						className="fa fa-2x fa-video-camera" 
						onClick={this.onVideoSearch.bind(this)}>
						</i>
				

				</td>
				<td>{data.sets}</td>
				<td>
						<i style={{color: 'green'}} 
						id='complete'
						className="fa fa-2x fa-check-circle-o" 
						onClick={this.onToggle.bind(this)}>
						</i>

						<i 
						style={data.complete === true ? 
						{opacity: '0'} 
						: {color: 'red'}} 
						id='remove'
						className="fa fa-2x fa-times" 
						onClick={this.onToggle.bind(this)}>
						</i>

						<i 
						style={data.complete === true ? 
						{opacity: '1',
						 color: 'blue',
						 float: 'right'} 
						: {opacity: '0'}} 
						className="fa fa-2x fa-thumbs-up">
						&nbsp;&nbsp;Great Job!
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
							<th>Sets</th>
							<th>Complete / Remove</th>
						</tr>
					</thead>
					<tbody>
						{exerciseGroup}
					</tbody>
				</table>
				<div>

				</div>
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
	return bindActionCreators({ removeExercise, completeExercise }, dispatch)
	//how would I do this without bindActionCreators??
}

export default connect(mapStateToProps, mapDispatchToProps)(ExerciseList);

// left off: markComplete function (make it part of state?), add youTube vids!, styling!