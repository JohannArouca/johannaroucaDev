import './Nav.css'
import React from 'react'
import NavItem from './NavItem'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <NavItem title="Início" link="/"></NavItem>
            <NavItem title="Sobre" link="/users"></NavItem>
            <NavItem title="Formações" link="/"></NavItem>
            <NavItem title="Experiências" link="/users"></NavItem>
            <NavItem title="Contato" link="/users"></NavItem>
        </nav>
    </aside>