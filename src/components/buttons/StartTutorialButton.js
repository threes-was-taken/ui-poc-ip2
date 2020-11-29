import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

import '../../css/Tutorial.css'

const StartTutorialButton = () => {
  return (
    <div>
      <h3>Simple ruleset explanation</h3>
      <Link to="/tutorial-step-x">
        <Button
          className="StartButton"
          content="Start Tutorial"
          size="massive"
          inverted
          color="brown"
        />
      </Link>
      <br />
      <br />
      <Link to="/">
        <Button inverted color="brown">
          Go Back
        </Button>
      </Link>
    </div>
  )
}

export default StartTutorialButton