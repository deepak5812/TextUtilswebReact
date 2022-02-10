import React from 'react'
import '../index.css'
import img from '../images/img1.jpeg'

function About() {
  return (
    <>
<div className="about-section">
  <h1>aBoUt mE</h1>
  <p>My Name is Deepak Mathur </p>
  <p>I'm a web developer with decent DSA knowledge</p>
</div>
<h2 style={{textAlign:"center"}}><b>Hello To all My Connections</b></h2>
<div className="row">
  <div className="column">
    <div className="card">
      <img src={img} alt="Deepak" style={{width:"100%"}}/>
      <div className="container">
        <h2>Deepak Mathur</h2>
        <p className="title"></p>
        <p><b><i>Looking for new opportunities</i></b></p>
        <p>deepakmathur5812@gmail.com</p>
      
      </div>
    </div>
    </div>
    </div>

    </>
  )
}

export default About
