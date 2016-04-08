import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeExercise } from '../actions/index';
import { completeExercise } from '../actions/index';
import { bindActionCreators } from 'redux';
import axios from 'axios';
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
		const searchTerm = `${term} form`;
		const URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&
		q=${searchTerm}&type=video&videoEmbeddable=true&key=${API_KEY}`;
		// make a request to Youtube with the term, pull out the id, and move it to state
		// click on video icon next to exercise, query youtube, bring up vids
		axios.get(URL).then((response)=>{
			this.setState({
				videoId: response.data.items[0].id.videoId
			})
		})
		
		// ?? Better way to get the exercise name below in the function call?? 

	}

	render() {
		const id = this.state.videoId;
		const url = `https://www.youtube.com/embed/${id}`;

		const exerciseGroup = this.props.exercises.map((data, ind) => {		
			return (
			<tr key={ind} id={ind} style={data.complete === true ? 
				{backgroundColor: '#509C44', textDecoration: 'line-through'}:{}}>
				<td>
					<p id='exerciseName'>{data.exercise}
					</p>
					<i
					id='form'
					className="pointers fa fa-2x fa-television" 
					onClick={(event) => {this.onVideoSearch(event.target.previousSibling.innerHTML)}}>
					</i>
					
				</td>
				<td><p>{data.sets}</p></td>
				<td>
						<i
						id='complete'
						className="pointers fa fa-2x fa-check-circle-o" 
						onClick={this.onToggle.bind(this)}>
						</i>
						
						<i 
						style={data.complete === true ? 
						{opacity: '0'} 
						: {}} 
						id='remove'
						className="pointers fa fa-2x fa-times-circle-o" 
						onClick={this.onToggle.bind(this)}>
						</i>

						<i 
						style={data.complete === true ? 
						{opacity: '1',
						 float: 'left'} 
						: {opacity: '0'}} 
						className="fa fa-2x fa-thumbs-up">
						&nbsp;Great Job!
						</i>
				</td>
			</tr>
			)
		});		

		return(
			<div className='container' style={{width: '60%', paddingTop: '25px'}}>
				<div className='table-responsive'>
					<table className='table table-bordered'>
						<thead>
							<tr>
								<th>Exercise</th>
								<th>Sets</th>
								<th style={{float: 'right', border: 'none'}}>Completed?</th>
							</tr>
						</thead>
						<tbody>
							{exerciseGroup}
						</tbody>
					</table>
				</div>
				<div className='row' style={{padding:'75px 0'}}>
					<div className='vidHolder col-md-8 col-md-offset-2'>
						<div className='embed-responsive embed-responsive-16by9'>
							<iframe className= 'embed-responsive-item' src={url}></iframe>
						</div>
					</div>
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