import './NavItem.css'
import React from 'react'
import {Link} from 'react-router-dom'

export default props =>
    <Link className="a" to={props.link}>
        <i className={`fa fa-${props.icon}`}></i> {props.title}
    </Link>

