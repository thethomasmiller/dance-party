import React, { useState, useEffect } from 'react'
import {Route} from "react-router-dom"
import axios from "axios"
import Party from "./components/party/Party"
import Home from "./components/home/Home"
import "./App.css"

export default function App() {

  let [gif, updateGif] = useState([])

  useEffect(() => {
    const callApi = async () => {
      const data = await axios ('https://api.giphy.com/v1/gifs/random?api_key=Q2M4GK4agfhUL6T3S2A2H1M2JhIs9hbT&tag=dance&rating=PG')
 
      updateGif(data.data.data)
    }
    callApi()
  }, [])

  let [lights, updateLights] = useState([])

  function handleLights() {
    const lightsOff = {
      style: {
        background: "url(https://media2.giphy.com/media/3FoCLhuJfNJ8zIukIn/giphy.gif?cid=ecf05e47f62f6fbf246e37b43b526612a3bb1ab9b0a63e77&rid=giphy.gif)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        // backgroundClip: "text",
        border: "10px dashed rgb(242, 7, 180)",
        padding: "10px",
        height: "100vh",
        width: "100vw"
      },
      styleTwo: {

      }
    }
    updateLights(lightsOff)
  }

  return (
    <>
      <Route path="/" exact>
      <Home className="home" />
      </Route>
      <Route path="/party">
        <Party gif={gif} className="party"
          lights={lights}
          handleLights={handleLights}/>
      </Route>
    </>
  )
}