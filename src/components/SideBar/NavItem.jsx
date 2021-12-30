import './NavItem.css'
import React from 'react'

export default function NavItem(props) {
    return (
        <a className="a" href={props.link}>{props.title}</a>
    )
}