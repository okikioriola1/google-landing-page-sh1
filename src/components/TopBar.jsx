import React from 'react'
import {Link} from "react-router-dom"
import {IoApps} from 'react-icons/io5'
import './TopBar.css'

const TopBar = () => {
    return (
        <div>
            <div className="topBar-section">
                <div className="topBar-Wrapper">
                    <Link to="/" className= 'topbar-link'>Gmail</Link>
                    <Link to="/" className= 'topbar-link'>Images</Link>
                    <Link to ="/" className= 'topbar-link'>
                        <IoApps className="apps-icon" alt=""/>
                    </Link>
                    <div className="user">O</div>

                </div>
            </div>
        </div>
    )
}

export default TopBar
