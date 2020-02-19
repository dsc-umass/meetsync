// pages/dashboard.js
import React from 'react';

import { auth, firebase } from '../components/Firebase/firebase'
// Add this at the top of the page
import withAuth from '../functions/withAuth';
import Layout from '../components/layout';
import router from 'next/router';
import axios from 'axios';
import ReactLoading from 'react-loading';
import Link from 'next/link';
import { Button } from 'reactstrap';

import { MDBIcon } from 'mdbreact';

const LoadingComponent = ({ type, color }) => (
  <ReactLoading type={type} color={color} height={667} width={375} />
);

const Event = ({event, remove}) => {
  return (
    <li>
      <div className="row">
        <div className="col">
          <Link href="/p/[id]" as={`/p/${event.id}`}>
            <a style={{fontSize: 20}}>{event.title}</a>
          </Link>
        </div>
        <div>
          <Button onClick={remove}>
            <MDBIcon icon="trash" />
          </Button>
        </div>
      </div>
    </li>);
}

const EventsList = ({eventsObj, remove}) => {
  // Map through the todos
  const todoNode = eventsObj.map((event, remove) => {
    return (<Event event={event} remove={remove}/>)
  });
  return (<ul>{todoNode}</ul>);
}

class Dashboard extends React.Component{
  constructor(props){
    // Pass props to parent class
    super(props);
    // Set initial state
    this.state = {
      data: [],
      shows: [],
      promiseIsResolved: false
    }
  }

  componentDidMount() {
    axios.get('/api/getAllEvents')
      .then((res) => {
        console.log(res.data)
        this.setState({
          promiseIsResolved: true,
          shows: res.data
        })
      });
  }

  // Handle remove
  handleRemove(id){
    // Filter all todos except the one to be removed
    const remainder = this.state.data.filter((todo) => {
      if(todo.id !== id) return todo;
    });
    // Update state with filter
    axios.delete('/api/deleteEvent?id='+id)
      .then((res) => {
        this.setState({data: remainder});      
      })
  }
  

  handleLogout = () => {
    auth.signOut().then(function () {
        alert('Logout successful');
    }).catch(function (error) {
        alert('OOps something went wrong check your console');
        console.log(err);
    });
    router.push('/')
  }

  render(){
    console.log(this.state.shows)
    if(!this.state.promiseIsResolved){return (
      <Layout>
        <section>
          <div style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}>
              <LoadingComponent type={"balls"} color={"#ffffff"}/>
          </div>
        </section>
      </Layout>
    )}
    return (
      <Layout>
        <section>
          <div className="container">
            <h1 className="text-center">Dashboard</h1>
            <EventsList eventsObj={this.state.shows} remove={this.handleRemove.bind(this)}/>
            <button onClick={this.handleLogout}>Logout</button>
          </div>
        </section>
        
      </Layout>
    );
  }
}
export default withAuth(Dashboard);