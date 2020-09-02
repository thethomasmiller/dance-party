// Party

import React, { useState } from 'react'
import Guest from "../guest/Guest"
import Header from "../header/Header"
import Footer from "../footer/Footer"
import Disco from "../disco/Disco"
import Refresh from "../refresh/Refresh"
import Boombox from '../boombox/Boombox'
import './Party.css'



export default function Party(props) {

  let [lights, updateLights] = useState([])

  function handleLights() {
    const lightsOff = {
      style: {
        backgroundImage: "url(https://media2.giphy.com/media/3FoCLhuJfNJ8zIukIn/giphy.gif?cid=ecf05e47f62f6fbf246e37b43b526612a3bb1ab9b0a63e77&rid=giphy.gif)",
        backgroundSize: "stretch",
        backgroundPosition: "center",
        // backgroundClip: "text",
        border: "10px dashed rgb(242, 7, 180)",
        height: '100vh',
        color: "transparent"
      }
    }
    updateLights(lightsOff)
  }

  return (<>
    <div style={lights.style} className="container" >
      <div className='guests-top-row'>
        <Guest />
        <Guest />
        <Guest />
        <Guest />
      </div>

      <div className='guests-header-controls'>
        <div className='guests-left-row'>
          <Guest gif={props} className="guest" style={lights.style} />
          <Guest />

        </div>

        <div className='header-controls-container'>
          <Header />
          <div className="control-panel">
            <button onClick={handleLights} className="lights-button">
              Lights
          </button>
            <Disco />
            <Refresh />
          </div>
          <Boombox />
        </div>
        <div className="guests-right-row">

          <Guest />
          <Guest />

        </div>
        
      </div>
      <div className="guests-bottom-row">
          <Guest/>
          <Guest />
          <Guest />
          <Guest />

        </div>

      <Footer />
    </div>
  </>)
}