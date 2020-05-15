import React from 'react';
import withAuth from '../../functions/withAuth';
import DashboardLayout from '../../components/DashboardLayout';

class Support extends React.Component{
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
      </DashboardLayout>
    );
  }
}
export default withAuth(Support);