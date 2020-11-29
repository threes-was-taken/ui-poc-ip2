import React, { Component } from 'react'

import RegisterButton from '../components/buttons/RegisterButton'
import TutorialButton from '../components/buttons/TutorialButton'
import LoginButton from '../components/buttons/LoginButton'

import '../css/HomeButtons.css'

export default class Home extends Component {
  render() {
    return (
      <div className="HomeButtonList">
        <RegisterButton />
        <br />
        <LoginButton />
        <br />
        <TutorialButton />
      </div>
    )
  }
}
