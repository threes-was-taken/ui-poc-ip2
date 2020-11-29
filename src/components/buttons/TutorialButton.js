import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import '../../css/HomeButtons.css'

const TutorialButton = () => {
  return (
    <div>
      <Link to="/tutorial">
        <Button content="Tutorial" size="huge" inverted color="brown" />
      </Link>
    </div>
  )
}

export default TutorialButton
