// Party Page

import React, { useState } from 'react'
import Guest from "./Guest"
import Header from "./Header"
import Footer from "./Footer"
import Disco from "./Disco"
import Refresh from "./Refresh"
import Boombox from './Boombox'
import './App.css'



export default function Party(props) {

  let [lights, updateLights] = useState([])

  function handleLights() {
    const lightsOff = {
      style: {
        backgroundImage: "url(https://media2.giphy.com/media/3FoCLhuJfNJ8zIukIn/giphy.gif?cid=ecf05e47f62f6fbf246e37b43b526612a3bb1ab9b0a63e77&rid=giphy.gif)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        // backgroundClip: "text",
        border: "10px dashed rgb(242, 7, 180)",
        color: "transparent"
      }
    }
    updateLights(lightsOff)
  }

  return (<>
    <div style={lights.style} className="container" >
      <Header />
     
      <div className="control-panel">
        <button onClick={handleLights} className="lights-button">
          Lights
        </button>
        <Disco/>
        <Refresh/>
      </div>

      <Boombox/>
      <div className="guest-container">
        <Guest gif={props} className="guest" style={lights.style} />
        <Guest />
        <Guest />
        <Guest />
        <Guest />
        <Guest />
        <Guest />
        <Guest />
        <Guest />
      </div>
      <Footer style={lights.style} />
    </div>
  </>)
}