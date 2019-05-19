import React from 'react'
import './Header.css'

class Header extends React.Component {
    constructor(){
        super()
        this.state = {

        }
    }
    render(){
        return (
            <div className="header">
                <a href="#">PREKES</a>
                <a href="#">MANO PREKES</a>
                <a href="#">AKCIJOS</a>
                <a href="#">EKO IR UKIS</a>
                <a href="#">NAUJIENOS</a>
            </div>
        )
    }
}

export default Header;