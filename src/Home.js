// Home Page

import React from "react"
import {Link} from 'react-router-dom'
import Header from "./Header"
import Footer from "./Footer"
import './App.css'

export default function Home() {



  return (<>
    <div className="home">
      <Header Link to="/"/> 
    <Link to ="/party" style={{ textDecoration: "none" }}>
      <button className = "lets-dance-button"> LETS DANCE</button>
    </Link>
    <Footer/>
    </div>
</> )
}