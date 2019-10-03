import React from 'react'
import { Link } from 'react-router-dom'
// import data from '../../knexfile/development'

class User extends React.Component {
	constructor(props) {
		super(props)

		this.state ={
			// userData: data.users.user
		}


	}

	render() {
		return (
			<React.Fragment>
				<div class="container">
					<h1 class="title">Add User</h1>
					<form>
						<div>
							<label htmlFor='text:'>Name:</label><input className='smallbox' type='text' />
						</div>
						<br />
						<br />
						<div>
							<input type='submit' value='Submit' className='button column is-10 is-offset-1' />
						</div>
					</form>
					<h1 class='title'>Staff List</h1>
					<br />
					<br />
					
					<div>
						{/* this is where user info will go; select the user and it will go to another page where you can update or delete user */}
					</div>
					<div>
						<Link to='/'><button class="column is-4 is-offset-4">Return To Main Page</button></Link>
					</div>
				</div>
			</React.Fragment>
		)
	}

}

export default User