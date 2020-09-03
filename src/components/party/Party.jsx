// Party

import React from 'react'
import Guest from "../guest/Guest"
import Header from "../header/Header"
import Footer from "../footer/Footer"
import Disco from "../disco/Disco"
import Refresh from "../refresh/Refresh"
import Boombox from '../boombox/Boombox'
import './Party.css'



export default function Party(props) {

  return (<>
    <div style={props.lights.style} className="container" >
      <div className='guests-top-row'>
        <Guest />
        <Guest />
        <Guest />
        <Guest />
      </div>

      <div className='guests-header-controls'>
        <div className='guests-left-row'>
          <Guest gif={props} className="guest" style={props.lights.style} />
          <Guest />

        </div>

        <div className='header-controls-container'>
          <Header />
          <div className="control-panel">
            <button onClick={props.handleLights} className="lights-button">
              Lights
          </button>
            <Disco />
            <Refresh />
          </div>
          <Boombox />
          <Footer />
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
    </div>
  </>)
}