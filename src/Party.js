import React, { useState } from 'react'
import Guest from "./Guest"
import Header from "./Header"
import Footer from "./Footer"
import Disco from "./Disco"
import './App.css'


export default function Party(props) {

  let [lights, updateLights] = useState([])
  
  function handleLights() {
    const lightsOff = {
      style: {
        backgroundImage: "url(https://66.media.tumblr.com/tumblr_m913co2zDb1qeqai4o1_500.gifv)",
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
    <div style={lights.style} >
      <Header/>
      <button onClick={handleLights} className="lights">
        Lights
      </button>

     <Disco/>
     <iframe className="boombox" width="280" height="157" src="https://www.youtube.com/embed/Tsna_zk8X1E" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <div className="house">
        <Guest gif={props} className="guest" style={lights.style}/>
        <Guest/>
        <Guest/>
        <Guest />
        <Guest/>
        <Guest/>
        <Guest/>
      </div>
      <Footer style={lights.style} />
    </div>
  </>)
}
