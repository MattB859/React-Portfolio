import React, { Component } from 'react'

export class Header extends Component {
  render() {
    return (
        <header>
            <h1 className="HeaderLogo">Porftfolio</h1>
            <nav className="NavBar">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Work</li>
                    <li>Contact</li>
                </ul>
            </nav>  
        </header>
    )
  }
}

export default Header