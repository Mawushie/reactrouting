import React, { Component } from 'react'
import {Link} from 'react-router-dom'


export default function navlinks() {
    return (
        <div>
            <Link to = "/"> Home</Link>
            <Link to = "/about"> About</Link>
            <Link to = "/contact"> Contact</Link>
            <Link to = "/services"> Services</Link>
        </div>
    )
}
