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


  return (
    <>
      <Route path="/" exact>
      <Home className="home" />
      </Route>
     <Route path="/party">
        <Party gif={gif} className="party" />
      </Route>
    </>
  )
}