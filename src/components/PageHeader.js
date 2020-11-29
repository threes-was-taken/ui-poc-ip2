import logo from '../static/logo-esw.jpg'
import torch from '../static/torch-gif.gif'
import React from 'react'
import '../css/PageHeader.css'

const PageHeader = () =>{
  return (
    <header className="Page-header">
      <img src={torch} className="Torch" id="Torch-Left" alt="torchLeft" />
      <img src={logo} className="Game-logo" alt="logo" />
      <img src={torch} className="Torch" id="Torch-Right" alt="torchRight" />
    </header>
  )
}

export default PageHeader