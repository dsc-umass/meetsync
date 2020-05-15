// pages/dashboard.js
import React from 'react';

// Add this at the top of the page
import withAuth from '../../functions/withAuth';
import Layout from '../../components/MainLayout'
import DashboardLayout from '../../components/DashboardLayout';
import router from 'next/router';
import axios from 'axios';
import ReactLoading from 'react-loading';
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import {
  Button, Card, CardHeader, CardBody,
  Container, Row, Col
} from 'reactstrap'

import Calendar from '../../components/Calendar'

const LoadingComponent = ({ type, color }) => (
  <ReactLoading type={type} color={color} height={667} width={375} />
);

const Event = ({event, remove}) => {
  return (
    <li>
      <div className="form-inline">
        <Link href="/p/[id]" as={`/p/${event.id}`}>
          <a style={{fontSize: 20}}>{event.title}</a>
        </Link>
        <Button onClick={remove}>
          <FontAwesomeIcon icon={faTrash} className="mr-2" />
        </Button>
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

class Events extends React.Component{
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

  createNewEvent = () => {
    router.push('/create_event');
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
      <DashboardLayout>
        <h1>Events</h1>
        <Container>
          <Card>
            <CardHeader><h3>Event Listing</h3></CardHeader>
            <CardBody><EventsList eventsObj={this.state.shows} remove={this.handleRemove.bind(this)}/></CardBody>
          </Card>
          <Calendar />
        </Container>
        
      </DashboardLayout>
    );
  }
}
export default withAuth(Events);