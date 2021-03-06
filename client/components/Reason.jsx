import React from 'react'
import { Link } from 'react-router-dom'

const Reason = () => {
	return (
		<React.Fragment>
			<div class="container">
				<h1 class="title">Add Reason</h1>
                <form>
					<div>
						<label htmlFor='text:'></label><input className='smallbox' type='text' />
					</div>
					<br />
					<br />
					<div>
						<input type='submit' value='Submit' className='button column is-10 is-offset-1' />
					</div>
				</form>
				<h1 className='title'>Reasons</h1>
				<br />
				<br />
				<div>
					<Link to='/'><button class="column is-4 is-offset-4">Return To Main Page</button></Link>
				</div>
			</div>
		</React.Fragment>
    )
}

export default Reason