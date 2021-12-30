import './Home.css'
import React from 'react'

export default function Home() {
    return (
        <React.Fragment>
            <div id="home" className="home">
                <h1>Johann Arouca</h1>
                <h2>ENGENHEIRO DA COMPUTAÇÃO | DESENVOLVEDOR DE SOFTWARE</h2>
                <div className="arrow">
                    <p className="arrow-text">ROLE PARA SABER MAIS</p>
                    <i className="fa fa-angle-double-down arrow-icon"></i>
                </div>
            </div>
        </React.Fragment>
    )
}