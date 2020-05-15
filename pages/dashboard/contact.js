import React from 'react';
import withAuth from '../../functions/withAuth';
import DashboardLayout from '../../components/DashboardLayout';
import { Card, CardHeader } from 'reactstrap'

class Contact extends React.Component{
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
        <h1>Contact Us</h1>
        <Card>
          <CardHeader>EMAIL: dsc@umass.com</CardHeader>
          <CardHeader>or call Abhinav?</CardHeader>
        </Card>
      </DashboardLayout>
    );
  }
}
export default withAuth(Contact);