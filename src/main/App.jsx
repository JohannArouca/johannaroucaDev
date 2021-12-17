import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import SideBar from '../components/template/SideBar'
import Home from '../components/template/Home'
import About from '../components/template/About'
import Portfolio from '../components/template/Portfolio'

export default props =>
    <BrowserRouter>
        <div className="app">
            <SideBar/>
            <Home/>
            <div/>
            <About/>
            <div/>
            <Portfolio/>
        </div>
    </BrowserRouter>
