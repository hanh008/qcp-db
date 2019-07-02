import React from 'react'
import { Link } from 'react-router-dom'

const AddNew = () => {
	return (
		<React.Fragment>
			<div className="container">
        <h1 className="title">Add New QCP</h1>
        <form >
					<div>
						<label htmlFor='date:'>Date:</label><input className='box' name='date' type='text' />
					</div>
					<div>
						<label htmlFor='text:'>Raised By:</label><input className='box' name='text' type='text' />
					</div>
					<div>
						<label htmlFor='text:'>Concerning:</label><input className='box' name='text' type='text' />
					</div>
					<div>
						<label htmlFor='text:'>Reason:</label><input className='box' name='text' type='text' />
					</div>
					<div>
						<label htmlFor='text:'>Action:</label><input className='box' name='text' type='text' />
					</div>
					<div>
						<label htmlFor='text:'>Test Code:</label><input className='box' name='text' type='text' />
					</div>
					<div>
						<label htmlFor='text:'>Factory:</label><input className='box' type='text' />
					</div>
					<div>
						<label htmlFor='text:'>Spec:</label><input className='box' type='text' />
					</div>
					<div>
						<label htmlFor='text:'>Batch:</label><input className='box' name='text' type='text' />
					</div>
					<div>
						<label htmlFor='text:'>Unit/s:</label><input className='box' name='text' type='text' />
					</div>
					<div>
						<label htmlFor='date:'>Results Due:</label><input className='box' name='date' type='text' />
					</div>
					<div>
						<label htmlFor='text:'>Comments:</label><input className='box' name='text' type='text' />
					</div>
        </form>
        <br />
        <div>
					<button className="column is-4 is-offset-4 centerObj">Save QCP</button>
					<br />
					<Link to='/'><button className="column is-4 is-offset-4 main">Return To Main Page</button></Link>
        </div>
   		</div>
		</React.Fragment>
	)
}


export default AddNew