// Home Page

import React from "react"
import { Link } from 'react-router-dom'
import Header from "../header/Header"
import Footer from "../footer/Footer"
import './Home.css'

export default function Home() {



  return (<>
    <div className="home">
      <div className='home-header'>Danceparty</div>
      <Link to="/party" style={{ textDecoration: "none" }}>
        <button className="lets-dance-button"> LETS DANCE</button>
      </Link>
      <Footer />
    </div>
  </>)
}