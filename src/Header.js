
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './App.css'

export default class Header extends Component {
  constructor(props) {
    super()
  }
  render() {
    return (
      <div className="header">
        <Link to="/" style={{ textDecoration: "none" }}><h1 style={{ color: "red", textDecoration: "none" }} >DANCEPARTY</h1></Link> 
      </div>
    )
  }
}