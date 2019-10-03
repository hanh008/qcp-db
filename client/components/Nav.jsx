import React from 'react'
import {Link} from 'react-router-dom'

class Nav extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div className='navbar-start'>
                <Link className='navbar-item is-large' to='./Add'>Add New QCP</Link>
                <Link className='navbar-item is-large' to='./Edit'>View/Edit QCP</Link>
                <Link className='navbar-item is-large' to='./Search'>Search Database</Link>
                <Link className='navbar-item is-large' to='./Review'>Weekly Review</Link>
                <Link className='navbar-item is-large' to='./User'>Update Users</Link>
                <Link className='navbar-item is-large' to='./Test'>Update Tests</Link>
                <Link className='navbar-item is-large' to='./Action'>Update Actions</Link>
                <Link className='navbar-item is-large' to='./Reason'>Update Reasons</Link>
            </div>
        )
    }
}

export default Nav