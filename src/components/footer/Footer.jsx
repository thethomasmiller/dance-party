import React, { Component } from 'react'
import "./Footer.css"

export default class Footer extends Component {
  render() {
    return (<>
    
      <h2 className="footer">
        <div  className= "citation-link" >POWERED BY <a className= "citation-link" href='https://www.spotify.com/us/'>SPOTIFY</a> & <a className="citation-link" href="https://giphy.com/">GIPHY</a></div>
      </h2>
    
      </>
    )
  }
}
