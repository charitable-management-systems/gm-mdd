import React from 'react'
import Link from 'gatsby-link'
import { Menu } from 'react-feather'
import "./header.scss"
import logo from "../images/MDD-logo.png"

const notOpen = () => alert('The application deadline has passed, please check back in January 2025');

class Header extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            menuFlag: false
        }
    }

    toggleMenu = () =>
        this.setState(prevState => ({menuFlag: prevState.menuFlag ? false : true}))

    menuClasses = () =>
        this.state.menuFlag ? ['menuItemList', 'menuItemList--active'].join(' ') : ['menuItemList']

    render() {
        return (
            <div className="header">
                <div className="logo">
                    <a to="/">
                        <img src={logo} />
                    </a>
                </div>
                <div className="menu">
                    <div className="menuIcon"><Menu onClick={this.toggleMenu} /></div>
                    <div className={this.menuClasses()}>
                      {/* <a className="menuItem" onClick={notOpen} style={{'cursor': 'pointer'}}>Apply</a> */}
                        <a className="menuItem" href="/apply">Apply</a>
                        <a className="menuItem" onClick={this.toggleMenu}  href="/#About">About</a>
                        <a className="menuItem" onClick={this.toggleMenu}  href="/#Eligibility">Eligibility</a>
                        <a className="menuItem" onClick={this.toggleMenu}  href="/#Apply">Application Process</a>
                        <a className="menuItem" onClick={this.toggleMenu}  href="/#Selection">Selection</a>
                        <a className="menuItem" onClick={this.toggleMenu}  href="/#Contact">Contact</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header
