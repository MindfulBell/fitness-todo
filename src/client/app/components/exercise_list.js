import React, { Component } from 'react';
import axios from 'axios';
import Video from '../components/video';
import Exercise from '../components/exercise';
const API_KEY = 'AIzaSyCNU9dpBdkTFsPHxgEkVehkPqz_V0innwc'


class ExerciseList extends Component {	
	constructor(props){
		super(props)
		this.state={
			YouTubeURL: ''
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

	// make a request to Youtube with the term, pull out the id, and move it to state
	// click on video icon next to exercise, query youtube, bring up vids
	onVideoSearch(term){
		const searchTerm = `${term} form`;
		const URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&
		q=${searchTerm}&type=video&videoEmbeddable=true&key=${API_KEY}`;
		
		axios.get(URL).then((response)=>{
			const id = response.data.items[0].id.videoId;
			this.setState({
				YouTubeURL: `https://www.youtube.com/embed/${id}`
			})
		})
	}

	render() {
		const exerciseGroup = this.props.exercises.map((data, ind) => {		
			return (
				<Exercise key={ind} ind={ind} data={data} 
				onVideoSearch={this.onVideoSearch.bind(this)} 
				onToggle={this.onToggle.bind(this)} 
				/>
			)
		});		

		return(
			<div>
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
				</div>
				<Video url={this.state.YouTubeURL}/>
			</div>
		)
	}
}

export default ExerciseList;