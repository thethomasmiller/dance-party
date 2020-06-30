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

  let [discoBall, updateDiscoBall] = useState([])
  
  function handleBall() {
    const ballOn = {
      style: {
        backgroundImage: "url(https://66.media.tumblr.com/7ed2dab49586c00956a0bb491d1b5538/tumblr_mlnzx84Ur21qzw1qyo1_500.gifv)",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }
    }
    updateDiscoBall(ballOn)
  }




  return (<>
    <div style={lights.style} >
      <Header/>
      <button onClick={handleLights} className="lights">
        Lights
      </button>

      <button onCLick={handleBall}>Disco</button>

      <div style={{backgroundColor:"blue"},discoBall.style} className="disco-ball"> </div>

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
