import React, { Component } from 'react'
import './NotFound.css'

class NotFound extends Component {
	list() {
		return [1,2,3].map(i=>{
			return <p key={i}>{i}</p>
		});
	}
    render () {
	    console.log(this.props)
        return (
            <div className="container">
                <p>404</p>
                {this.list()}
                <p>Page not found</p>
            </div>
        )
    }
}

export default NotFound