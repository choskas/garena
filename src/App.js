
import './App.css';

import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div className='firstDiv'>
      <div className='overlay'>
        <div className='showImage' >
          <img className='Image' style={{}}  src='/images/moblie.png' alt='img'></img>
          <img className='ipadImage' style={{}} src='/images/ipad.jpg' alt='ipad' />
        </div>
      </div>
        
      </div>
    )
  }
}

