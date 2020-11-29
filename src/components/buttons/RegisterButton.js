import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import '../../css/HomeButtons.css'

export default class RegisterButton extends Component {
  render() {
    return (
      <div>
        <Button content="Register" size="huge" inverted color="brown" />
      </div>
    )
  }
}
