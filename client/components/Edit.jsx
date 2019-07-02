import React from 'react'
import { Link } from 'react-router-dom'

const Edit = () => {
	return (
		<React.Fragment>
			<div class="container">
        <h1 class="title">Edit QCP</h1>
        <form>
					<div>
						<label htmlFor='text:'>Raised By:</label><input className='box' type='text' />
					</div>
        </form>
        <br />
        <div>
					<button class="column is-4 is-offset-4">Edit QCP</button>
					<br />
					<Link to='/'><button class="column is-4 is-offset-4 main">Return To Main Page</button></Link>
        </div>
			</div>
		</React.Fragment>
    )
}

export default Edit