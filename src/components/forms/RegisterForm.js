import React from 'react'
import { Form, Button, Icon, Segment, Grid } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import '../../css/Forms.css'

const RegisterForm = () => {
  return (
    <Grid centered>
      <Segment inverted compact className="RegisterForm">
        <Form inverted>
          <Form.Input fluid label="First name" />
          <Form.Input fluid label="Last name" />
          <Form.Input fluid label="Nickname" />
          <Form.Input fluid label="Date Of Birth" type="date" />

          <Form.Input fluid label="Email" />
          <Form.Input fluid label="Password" type="password" />
          <Form.Input fluid label="Repeat password" type="password" />

          <Form.Button inverted color="brown">
            Register
          </Form.Button>
          <Button color="facebook">
            <Icon name="facebook" /> Register with Facebook
          </Button>
          <br />
          <br />
          <Button color="google plus">
            <Icon name="google plus" /> Register with Google
          </Button>
        </Form>
        <br />
        <Link to="/">
          <Button inverted color="brown" floated="right">
            Go Back
          </Button>
        </Link>
      </Segment>
    </Grid>
  )
}

export default RegisterForm
