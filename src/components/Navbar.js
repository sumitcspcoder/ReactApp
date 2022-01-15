import React, { useState } from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'

export default function Navbar(props) {
    const [circleStyle, setCircleStyle] = useState({

        Green: {
            height: '25px',
            width: '25px',
            backgroundColor: 'green',
            borderRadius: '50px',
            display: 'inline-block',
            margin: '0px 5px 0px 5px'
        },
        ActiveGreen: {
            height: '25px',
            width: '25px',
            backgroundColor: 'green',
            borderRadius: '50px',
            display: 'inline-block',
            margin: '0px 5px 0px 5px',
            border: '2px solid black'
        },
        Blue: {
            height: '25px',
            width: '25px',
            backgroundColor: 'blue',
            borderRadius: '50px',
            display: 'inline-block',
            margin: '0px 5px 0px 5px'
        },
        Red: {
            height: '25px',
            width: '25px',
            backgroundColor: 'red',
            borderRadius: '50px',
            display: 'inline-block',
            margin: '0px 5px 0px 5px'
        },
        Pink: {
            height: '25px',
            width: '25px',
            backgroundColor: 'pink',
            borderRadius: '50px',
            display: 'inline-block',
            margin: '0px 5px 0px 5px'
        }
    })
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">

                {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
                <a className="navbar-brand" href='#'>{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
                            <a className="nav-link active" aria-current="page" to="/">Home</a>
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link" to="/about">{props.aboutText}</Link>                            
                        </li> */}
                    </ul>
                    {/* <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> */}

                    <a onClick={props.greenMode} style={circleStyle.Green} />
                    <a a onClick={props.greenMode} style={circleStyle.Blue}> </a>
                    <a onClick={props.greenMode} style={circleStyle.Red}> </a>
                    <a onClick={props.greenMode} style={circleStyle.Pink}> </a>

                    <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                        <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
                    </div>
                </div>
            </div>
        </nav >
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string
}

Navbar.defaultProps = {
    title: 'company name',
    aboutText: 'About'
}