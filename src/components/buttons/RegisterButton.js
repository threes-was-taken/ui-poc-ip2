import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import '../../css/HomeButtons.css'

const RegisterButton = () => {
  return (
    <div>
      <Link to="/register">
        <Button content="Register" size="huge" inverted color="brown" />
      </Link>
    </div>
  )
}

export default RegisterButton
