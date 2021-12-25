import './SideBar.css'
import React, { useState } from 'react'
import Nav from './Nav'
import Logo from './Logo'
import SocialMedias from './SocialMedias'
import { Link } from 'react-router-dom'

export default function SideBar() {
    const [sideBar, setSideBar] = useState(false);

    const showSideBar = () => setSideBar(!sideBar);

    return (
        <>
            <Link to='#' className='menu-bars'>
                <i onClick={showSideBar} className={sideBar ? 'menu-icon fa fa-arrow-left fa-lg' : 'menu-icon fa fa-bars fa-lg'}></i>
            </Link>
            <aside className={sideBar ? 'side-bar-area active' : 'side-bar-area'}>
                <Logo />
                <Nav />
                <SocialMedias />
            </aside>
        </>
    )
}