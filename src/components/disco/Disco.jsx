//Disco Ball Dropdown wih Button

import React, { useState } from 'react'
import './Disco.css'

export default function Disco() {

  let [discoBall, updateDiscoBall] = useState([])
  
  function handleBall() {
    const ballOn = {
      style: {
        backgroundImage: "url(https://66.media.tumblr.com/7ed2dab49586c00956a0bb491d1b5538/tumblr_mlnzx84Ur21qzw1qyo1_500.gifv)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "150px",
        width: "150px"
      }
    }
    updateDiscoBall(ballOn)
  }
  return (<> 
    <div className={discoBall ? "disco" : null} >
      <button onClick={handleBall} className="disco-button">Disco</button>
      <div style={discoBall.style} className="disco-ball"></div>
   </div>
</>)
}
