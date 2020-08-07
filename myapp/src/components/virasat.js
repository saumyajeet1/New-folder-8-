import React, { Component } from 'react';
import './12.css'
import padma from './images/4th/anirban.jpg'
class Virasat extends Component {
    render() {
        return (
           
<div className = "timeline">
  <div className = "containeri left">
    <div className = "content">
      <h2>2017</h2>
      <img src={padma} style={{height:"200px", width:"200px"}} loading="lazy" alt="timeline"/>
      <p>Jaishankar(Padmashree)</p>
    </div>
  </div>
  <div className = "containeri right">
    <div className = "content">
      <h2>2016</h2>
      <img src={padma} style={{height:"200px", width:"200px"}} loading="lazy" alt="timeline"/>
      <p>Jaishankar(Padmashree)</p>
    </div>
  </div>
  <div className = "containeri left">
    <div className = "content">
      <h2>2015</h2>
      <img src={padma} style={{height:"200px", width:"200px"}} loading="lazy" alt="timeline"/>
      <p>Jaishankar(Padmashree)</p>
    </div>
  </div>
  <div className = "containeri right">
    <div className = "content">
      <h2>2012</h2>
      <img src={padma} style={{height:"200px", width:"200px"}} loading="lazy" alt="timeline"/>
      <p>Jaishankar(Padmashree)</p>
    </div>
  </div>
  <div className = "containeri left">
    <div className = "content">
      <h2>2011</h2>
      <img src={padma} style={{height:"200px", width:"200px"}} loading="lazy" alt="timeline"/>
      <p>Jaishankar(Padmashree)</p>
    </div>
  </div>
  <div className = "containeri right">
    <div className = "content">
      <h2>2007</h2>
      <img src={padma} style={{height:"200px", width:"200px"}} loading="lazy" alt="timeline"/>
      <p>Jaishankar(Padmashree)</p>
    </div>
  </div>
</div>

        );
    }
}

export default Virasat;