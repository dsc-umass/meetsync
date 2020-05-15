// pages/dashboard.js
import React from 'react';

import axios from 'axios'
import withAuth from '../../functions/withAuth';
import DashboardLayout from '../../components/DashboardLayout';
import { Card, CardHeader, CardBody } from 'reactstrap'


class Dashboard extends React.Component{
  constructor(props){
    // Pass props to parent class
    super(props);
    // Set initial state
    this.state = {
      clubs: []
    }
  }

  
  componentDidMount() {
    // should be getting clubs of A USER
    // axios.get('api/getClubs/' + user.id)
    axios.get('/api/getClubs')
      .then((res) => {
        console.log(res.data)
        this.setState({
          clubs: res.data
        })
      });
  }

  render(){
    return (
      <DashboardLayout>
        <h1>Dashboard</h1>
        <Card>
          <CardHeader><h3>Clubs</h3></CardHeader>
          <CardBody>
            {
              this.state.clubs.map((value) => {
                return (
                  <div>
                    <h3>{value["name"]}</h3>
                    <div style={{alignItems: "center", display: "flex",}}>
                      Members: {value["members"].map((member) => {
                        return <>{member}, </>
                      })}
                    </div>
                  </div>
                )
              })
            }
          </CardBody>
        </Card>
      </DashboardLayout>
    );
  }
}
export default withAuth(Dashboard);