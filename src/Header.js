
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './App.css'

export default class Header extends Component {
  constructor(props) {
    super()
  }
  render() {
    return (
      <div>
        <Link to="/" style={{ textDecoration: "none" }}><h1 style={{ color: "red", textDecoration: "none" }} className="header">DANCEPARTY</h1></Link> 
      </div>
    )
  }
}