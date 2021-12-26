import './Portfolio.css'
import React, { useEffect, useState, useRef } from 'react'

export default function Portfolio() {
    const [data, setData] = useState([])
    const carousel = useRef(null)

    useEffect(() => {
        fetch('http://localhost:3000/static/projects.json')
            .then((response) => response.json())
            .then(setData)
    }, [])

    const handleLeftClick = (e) => {
        e.preventDefault()
        carousel.current.scrollLeft = carousel.current.scrollLeft - 400
        /* carousel.current.scrollLeft -= carousel.current.offsetWidth */
    }

    const handleRightClick = (e) => {
        e.preventDefault()
        carousel.current.scrollLeft = carousel.current.scrollLeft + 400
        /* carousel.current.scrollLeft += carousel.current.offsetWidth */
    }

    if (!data || !data.length) return null

    return (
        <div id="portfolio" className="portfolio">
            <h2>{'<Portfólio>'}</h2>

            <div className='carousel' ref={carousel}>

                {data.map((item) => {
                    const { id, name, image, text, technology, link } = item

                    return (
                        <div className='item' key={id}>
                            <div className='title'>
                                <img src={image}></img>
                                <h3>{name}</h3>
                            </div>
                            <div className='paragraph'>
                                <p>{text}</p>
                            </div>
                            <div className='footer'>
                                <div className='technology'>
                                    <img src={technology} alt="" />
                                </div>
                                <a href={link} target="_blank">
                                    Ver aplicação
                                </a>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className='buttons'>
                <button onClick={handleLeftClick}>
                    <i className='fa fa-angle-left fa-5x' alt="Scroll Left" />
                </button>
                <button onClick={handleRightClick}>
                    <i className='fa fa-angle-right fa-5x' alt="Scroll Right" />
                </button>
            </div>
        </div>

    )

    /*

    return (
        <div id="portfolio" className="portfolio">
            <h2>{'<Portfólio>'}</h2>
            <div className='carousel' ref={carousel}>

                {data.map((item) => {
                    const {id, name, text, image} = item

                    return (
                        <div className='item' key={id}>
                            <h3>{name}</h3>
                            <p>{text}</p>
                        </div>
                    )
                })}
            </div>
            <div className='buttons'>
                <button onClick={handleLeftClick}>
                    <i className='fa fa-angle-left fa-5x' alt="Scroll Left"/>
                </button>
                <button onClick={handleRightClick}>
                    <i className='fa fa-angle-right fa-5x' alt="Scroll Right"/>
                </button>
            </div>
        </div>
    ) */
}