import React from 'react'
import './Footer.css'

class Footer extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <div className="footer">
                <nav>
                    <a href="#">DUK</a>
                    <a href="#">Pirkimo - pardavimo taisykles</a>
                    <a href="#">Privatumo politika</a>
                    <a href="#">Prekiu pristatymas</a>
                </nav>
            </div>
        )
    }
}

export default Footer