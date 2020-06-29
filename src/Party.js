import React from 'react'
import Header from "./Header"
import Guest from "./Guest"
import './App.css'


export default function Party(props) {
  
  return (<>
  <Header/>
  <div>
  <Guest gif={props} />
  </div>
 </> )
}
