import React from 'react'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import '../../css/HomeButtons.css'

const LoginButton = () => {
  return (
    <Link to="/login">
      <Button animated inverted color="brown" size="small">
        <Button.Content visible>Already a member?</Button.Content>
        <Button.Content hidden>Log in</Button.Content>
      </Button>
    </Link>
  )
}

export default LoginButton
