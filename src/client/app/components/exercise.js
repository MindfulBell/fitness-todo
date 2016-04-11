import React from 'react';

export default ({ind, data, onVideoSearch, onToggle}) => {
	return (
		<tr id={ind} style={data.complete === true ? 
				{backgroundColor: '#509C44', textDecoration: 'line-through'}:{}}>
				<td>
					<p id='exerciseName'>{data.exercise}
					</p>
					<i
					id='form'
					className="pointers fa fa-2x fa-television" 
					onClick={(event) => {onVideoSearch(event.target.previousSibling.innerHTML)}}>
					</i>
					
				</td>
				<td><p>{data.sets}</p></td>
				<td>
						<i
						id='complete'
						className="pointers fa fa-2x fa-check-circle-o" 
						onClick={onToggle}>
						</i>
						
						<i 
						style={data.complete === true ? 
						{opacity: '0'} 
						: {}} 
						id='remove'
						className="pointers fa fa-2x fa-times-circle-o" 
						onClick={onToggle}>
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
};