import React, { useState, useEffect } from 'react';
import { MenuItems } from './menuItem'
import Menu from '@material-ui/icons/Menu';
import Close from '@material-ui/icons/Close';
import './navbar.css'

class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            menuActive: false
          };
      }
    
    render() {
        return <nav>
        <div id='#' className="navbarContainer">
            <div className="mainGreen navbarTitle">
                    JE’NEMADINGING REGENCY
            </div>
            <div className="menu-icon" onClick={() => {
                this.setState({
                    menuActive: !this.state.menuActive
                });
            }}>
                {this.state.menuActive ? <Close style={{ fontSize: '16px'}} /> : <Menu style={{ fontSize: '16px'}} />}
            </div>
            <div>
            <ul className={this.state.menuActive ? 'navMenuContainer active' : 'navMenuContainer'}>
                {/* <ul className="navMenuContainer"> */}
                    {MenuItems.map((item, index) => {
                        return(
                            <li className="mainGreen" style={{display: 'flex', flexDirection:'row', alignItems: 'center'}}>
                                {/* <a onClick={() => {setNavCLicked(item.cName)}} className={item.cName} href={item.url}>{item.title}</a> */}
                                <a id={item.id} className={item.cName} href={item.id}>{item.title}</a>
                            </li>
                        )
                    })
                    }
                </ul>
            </div>
        </div>
        </nav>
    }
  }

export default Navbar