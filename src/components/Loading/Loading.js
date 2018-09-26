import React, { Component } from 'react'
import './Loading.css'

class Loading extends Component {
    render() {
        return (
            <div className="container">
                <section className="section">
                    <div className="container">
                        <div className="loader">Loading Please Wait !!</div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Loading