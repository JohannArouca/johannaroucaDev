import './SideBar.css'
import React from 'react'
import Nav from './Nav'
import Logo from './Logo'
import SocialMedias from './SocialMedias'

export default props =>
    <aside className="side-bar-area">
        <Logo/>
        <Nav/>
        <SocialMedias/>
    </aside>