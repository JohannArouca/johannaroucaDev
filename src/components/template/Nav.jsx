import './Nav.css'
import React from 'react'
import NavItem from './NavItem'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <NavItem title="Início" link="#home"></NavItem>
            <NavItem title="Sobre" link="#about"></NavItem>
            <NavItem title="Portfólio" link="#portfolio"></NavItem>
            <NavItem title="Formações" link="/"></NavItem>
            <NavItem title="Experiências" link="/"></NavItem>
            <NavItem title="Contato" link="/"></NavItem>
        </nav>
    </aside>