import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import SideBar from '../components/SideBar/SideBar'
import Home from '../components/Home/Home'
import About from '../components/About/About'
import Portfolio from '../components/Portfolio/Portfolio'
import Experiences from '../components/Experiences/Experiences'
import Graduations from '../components/Graduations/Graduations'

export default props =>
    <BrowserRouter>
        <div className="app">
            <SideBar/>
            <Home/>
            <div/>
            <About/>
            <div/>
            <Portfolio/>
            <div/>
            <Graduations/>
            <div/>
            <Experiences/>
        </div>
    </BrowserRouter>
