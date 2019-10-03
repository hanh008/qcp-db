import React from 'react'
import { Link } from 'react-router-dom'

const Review = () => {
	return (
		<React.Fragment>
			<div class="container">
				<h1 class="title">Review QCPs</h1>
				<form>
					<div>
						<label htmlFor='date:'>Start Date:</label><input className='smallbox' type='date' />
					</div>
					<div>
						<label htmlFor='text:'>End Date:</label><input className='smallbox' type='date' />
					</div>
					<br />
					<br />
					<div>
						<input type='submit' value='Search' className=' button column is-10 is-offset-1' />
					</div>
				</form>
				<br />
				<br />
				<div>
					<Link to='/'><button class="column is-4 is-offset-4">Return To Main Page</button></Link>
				</div>
			</div>
		</React.Fragment>
    )
}

export default Review