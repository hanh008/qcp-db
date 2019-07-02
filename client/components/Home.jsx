import React from 'react'

import { Link } from 'react-router-dom'

const Home = props => {
	return (
		<React.Fragment>
			<div className='container'>
				<h1 className='title'>QCP Database</h1>
				<br />
				<div className="columns">
					<Link to ="/add-new" className="column is-6"><button className="column is-8">Add New QCP</button></Link>
					<br />
					<br />
					<Link to ="/edit" className="column is-6"><button className="column is-8">Edit QCP</button></Link>
				</div>
				<br />
				<br />
				<div className="columns">
					<Link to ="" className="column is-6"><button className="column is-8">Search Database</button></Link>
					<br />
					<br />
					<Link to ="" className="column is-6"><button className="column is-8">Weekly Review</button></Link>
				</div>
				<br />
				<br />
				<div className="columns">
					<Link to ="" className="column is-6"><button className="column is-8">Add User</button></Link>
					<br />
					<br />
					<Link to ="" className="column is-6"><button className="column is-8">Modify User</button></Link>
				</div>
				<br />
				<br />
				<div className="columns">
					<Link to ="" className="column is-6"><button className="column is-8">Add Test</button></Link>
					<br />
					<br />
					<Link to ="" className="column is-6"><button className="column is-8">Delete Test</button></Link>
				</div>
			</div>
		</React.Fragment>
	)
}

export default Home