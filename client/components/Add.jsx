import React from 'react'
import { Link } from 'react-router-dom'

const Add = () => {
	return (
		<React.Fragment>
			<div className="container">
			<h1 className="title">Add New QCP</h1>
				<form>
					<div>
						<label htmlFor='date:'>Date Raised:</label><input className='smallbox' type='date' />
					</div>
					<div>
						<label htmlFor='text:'>Raised By:</label><input className='smallbox' type='text' />
					</div>
					<div>
						<label htmlFor='text:'>Test Code:</label><input className='smallbox' type='text' />
					</div>
					<div>
						<label htmlFor='text:'>Factory:</label><input className='smallbox' type='text' />
					</div>
					<div>
						<label htmlFor='text:'>Spec:</label><input className='smallbox' type='text' />
					</div>
					<div>
						<label htmlFor='text:'>Batch:</label><input className='smallbox' type='text' />
					</div>
					<div>
						<label htmlFor='text:'>Unit/s:</label><input className='smallbox' type='text' />
					</div>
					<div>
						<label htmlFor='text:'>Concerning:</label><input className='smallbox' type='text' />
					</div>
					<div>
						<label htmlFor='text:'>Reason:</label><input className='smallbox' type='text' />
					</div>
					<div>
						<label htmlFor='text:'>Action:</label><input className='smallbox' type='' />
					</div>
					<div>
						<label htmlFor='date:'>Results Due:</label><input className='smallbox' type='date' />
					</div>
					<div>
						<label htmlFor='text:'>Comments:</label><textarea className='largebox' type='text' />
					</div>
					<br />
					<br />
					<div>
						<input type='submit' value='Save QCP' className=' button column is-10 is-offset-1' />
					</div>
				</form>	
				<br />
				<br />
				<div>
					<Link to='/'><button className="column is-4 is-offset-4 ">Return To Main Page</button></Link>
				</div>
				<br />
			</div>
		</React.Fragment>
	)
}


export default Add