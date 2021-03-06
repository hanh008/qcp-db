import React from 'react'
import { Link } from 'react-router-dom'

const Edit = () => {
	return (
		<React.Fragment>
			<div class="container">
				<h1 class="title">View/Edit QCP</h1>
				<form>
					<div>
						<label htmlFor='text:'>QCP Number:</label><input className='smallbox' type='text' />
					</div>
					<br />
					<br />
					<div>
						<input type='submit' value='View/Edit QCP' className='button column is-10 is-offset-1' />
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

export default Edit