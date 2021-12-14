import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Footer from '../components/template/Footer'
import SideBar from '../components/template/SideBar'
import Home from '../components/template/Home'

export default props =>
    <BrowserRouter>
        <div className="app">
           {/*  <Logo/> */}
            <SideBar/>
            {/* <MenuButton/> */}
            <Home/>
            {/* <Footer/> */}
        </div>
    </BrowserRouter>
