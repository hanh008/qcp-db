import React from 'react'
import { Link } from 'react-router-dom'

const Search = () => {
	return (
		<React.Fragment>
			<div class="container">
				<h1 class="title">Search Database</h1>
				<form >
					<div>
						<label htmlFor='date:'>Start Date:</label><input className='smallbox' type='date' />
					</div>
					<div>
						<label htmlFor='text:'>End Date:</label><input className='smallbox' type='date' />
					</div>
					<div>
						<label htmlFor='text:'>Raised By:</label><input className='smallbox' type='text' />
					</div>
					<div>
						<label htmlFor='text:'>Concerning:</label><input className='smallbox' type='text' />
					</div>
					<div>
						<label htmlFor='text:'>Reason:</label><input className='smallbox' type='text' />
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
					<br />
					<br />
					<div>
						<input type='submit' value='Search' className=' button column is-10 is-offset-1' />
					</div>
        </form>
				<br />
				<br />
				<div>
					<Link to='/'><button className="column is-4 is-offset-4">Return To Main Page</button></Link>
					<br />
				</div>
			</div>
		</React.Fragment>
    )
}

export default Search