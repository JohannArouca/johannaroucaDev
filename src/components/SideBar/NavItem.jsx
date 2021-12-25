import './NavItem.css'
import React from 'react'
import {Link} from 'react-router-dom'

export default props =>
    <a className="a" href={props.link}>{props.title}</a>


