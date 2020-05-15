import React from 'react';
import withAuth from '../../functions/withAuth';
import DashboardLayout from '../../components/DashboardLayout';

import {
  Button, Card, CardHeader, CardText, CardBody, CardLink,
  Form, FormGroup, Label, Input
} from 'reactstrap';

class CreateEvent extends React.Component{
  constructor(props){
    // Pass props to parent class
    super(props);
    // Set initial state
    this.state = {
    }
  }

  render() {
    return (
      <DashboardLayout>
        <h1>Create Event</h1>
        <Card>
          <CardHeader color="primary">
            <h3>Edit Profile</h3>
            <p style={{color:"black"}}>Complete your profile</p>
          </CardHeader>
          <CardBody>
            <Form >
              <FormGroup inline={true}>
                <Label for="exampleEmail">Name: {" "}</Label>
                <Input type="email" name="email" id="exampleEmail" placeholder="Tim S" />
              </FormGroup>
              <FormGroup inline={true}>
                <Label for="exampleEmail">School: {" "}</Label>
                <Input type="email" name="email" id="exampleEmail" placeholder="UMass Amherst" />
              </FormGroup>
              <FormGroup inline={true}>
                <Label for="exampleEmail">Username (Email): {" "}</Label>
                <Input type="email" name="email" id="exampleEmail" placeholder="tim@umass.edu" disabled />
              </FormGroup>
              <FormGroup inline={true}>
                <Label for="exampleEmail">Password: {" "}</Label>
                <Input type="email" name="email" id="exampleEmail" placeholder="timmy_password" disabled  />
              </FormGroup>
              <Button>Submit</Button>
            </Form>
          </CardBody>
          <CardBody>
            <CardLink href="#">Update Email Address</CardLink>
            <CardLink href="#">Password Reset Link</CardLink>
          </CardBody>
        </Card>
      </DashboardLayout>
    );
  }
}
export default withAuth(CreateEvent);