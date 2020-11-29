import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import '../../css/HomeButtons.css'

export default class TutorialButton extends Component {
  render() {
    return (
      <div>
        <Button content="Tutorial" size="huge" inverted color='brown'/>
      </div>
    )
  }
}
