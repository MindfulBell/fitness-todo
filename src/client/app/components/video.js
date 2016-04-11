import React from 'react';

const Video = ({url}) => {
	return (		
		<div className='row' style={{padding:'75px 0', textAlign: 'center'}}>
			<h3 style={{color: 'white'}}> Form Checker </h3>
				<div className='vidHolder col-md-6 col-md-offset-3'>
					<div className='embed-responsive embed-responsive-16by9'>
						<iframe className= 'embed-responsive-item' src={url}></iframe>
					</div>
				</div>
		</div>

		)
};

export default Video;