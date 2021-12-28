import './Nav.css'
import React from 'react'
import NavItem from './NavItem'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <NavItem title="Início" link="#home"></NavItem>
            <NavItem title="Sobre" link="#about"></NavItem>
            <NavItem title="Portfólio" link="#portfolio"></NavItem>
            <NavItem title="Formações" link="#graduations"></NavItem>
            <NavItem title="Experiências" link="#experiences"></NavItem>
            <NavItem title="Contato" link="#contact"></NavItem>
        </nav>
    </aside>