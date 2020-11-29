import React from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Icon, Segment, Grid } from 'semantic-ui-react'

const LoginForm = () => {
  return (
    <Grid centered>
      <Segment compact inverted className="LoginForm">
        <Form inverted>
          <Form.Input fluid label="Username/Email" />
          <Form.Input fluid label="Password" type="password"/>

          <Form.Button inverted color="brown">
            Log In
          </Form.Button>
          <Button color="facebook">
            <Icon name="facebook" /> Log in with Facebook
          </Button>
          <Button color="google plus">
            <Icon name="google plus" /> Log in with Google
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

export default LoginForm
