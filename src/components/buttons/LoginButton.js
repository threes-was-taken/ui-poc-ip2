import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import '../../css/HomeButtons.css'

export default class LoginButton extends Component {
  render() {
    return (
      <Button animated inverted color="brown" size="small">
        <Button.Content visible>Already a member?</Button.Content>
        <Button.Content hidden>Log in</Button.Content>
      </Button>
    )
  }
}
