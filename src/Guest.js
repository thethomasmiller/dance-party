// Guest Containers Displaying Gifs

import React, { useState } from 'react'
import axios from "axios"

export default function Guest(props) {

  let [guest, updateGuest] = useState([])

  function handleClick() {
    const callAgain = async () => {
      const data = await axios('https://api.giphy.com/v1/gifs/random?api_key=Q2M4GK4agfhUL6T3S2A2H1M2JhIs9hbT&tag=dance&rating=PG')
      updateGuest(data.data.data)
    }
    callAgain()
  }


  return (
    <div className="guest">
      <img src={guest.fixed_width_small_url} className="gif"/>
      <button onClick={handleClick} className="invite-button">
        Invite Guest
      </button>
    </div>
  )
}
