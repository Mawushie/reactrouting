import React, { Component } from 'react'
import {BrowserRouter , Route , Switch} from 'react-router-dom'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
import Services from '../pages/Services'
import Navlinks from '../components/Navlinks'
import ServiceDetails from '../pages/ServiceDetails'

export default function Router() {
    return (
        <div>  
                <BrowserRouter>
                    <Navlinks />

                    <Switch>
                        <Route exact path = "/" component = {Home}/>
                        <Route exact path = "/about" component = {About}/>
                        <Route exact path = "/contact" component = {Contact}/>
                        <Route exact path = "/services" component = {Services}/>
                        <Route exact path = "/services/:id" component = {ServiceDetails}/>
                    </Switch>
                </BrowserRouter> 
        </div>
    )
}
