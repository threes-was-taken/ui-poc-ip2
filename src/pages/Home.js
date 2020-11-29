import React from 'react'

import RegisterButton from '../components/buttons/RegisterButton'
import TutorialButton from '../components/buttons/TutorialButton'
import LoginButton from '../components/buttons/LoginButton'

import '../css/HomeButtons.css'
const Home = () => {
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

export default Home
