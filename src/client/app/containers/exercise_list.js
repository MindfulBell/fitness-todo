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
			videoId: ''
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
		// make a request to Youtube with the term, pull out the id, and move it to state
		// click on video icon next to exercise, query youtube, bring up vids

		// query YouTube with the term

		// get back the top match and it's id

		// put id in state

		// this.setState({
		// 	videoId:  _____
		// })

		//how do i change size of the video player below?
	}

	render() {
		const id = this.state.videoId;
		const url = `https://www.youtube.com/embed/${id}`;

		const exerciseGroup = this.props.exercises.map((data, ind) => {		
			return (
			<tr key={ind} id={ind} style={data.complete === true ? 
				{backgroundColor: 'lightblue', textDecoration: 'line-through'}:{}}>
				<td>
					<p>{data.exercise}
						<i
						 id='form'
						 className="fa fa-video-camera" 
						 onClick={this.onVideoSearch}>
						</i>
					</p>
					
				</td>
				<td><p>{data.sets}</p></td>
				<td>
						<i
						id='complete'
						className="fa fa-check-circle-o" 
						onClick={this.onToggle.bind(this)}>
						</i>

						<i 
						style={data.complete === true ? 
						{opacity: '0'} 
						: {}} 
						id='remove'
						className="fa fa-times" 
						onClick={this.onToggle.bind(this)}>
						</i>

						<i 
						style={data.complete === true ? 
						{opacity: '1',
						 float: 'right'} 
						: {opacity: '0'}} 
						className="fa fa-thumbs-up">
						&nbsp;Great Job!
						</i>
				</td>
			</tr>
			)
		});		

		return(	
			<div className='container' style={{width: '60%', paddingTop: '25px'}}>
			<div className='embed-responsive embed-responsive-16by9'>
				<iframe className= 'embed-responsive-item' src={url}></iframe>
			</div>				
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