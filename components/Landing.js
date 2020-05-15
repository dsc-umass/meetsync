import React, { Component } from "react";
import Link from "next/link";
import { Container, Row, Col } from 'reactstrap'

class Landing extends Component {
  render() {
    return (
      <div 
        style={{
          height: "100vh",
          width: "200vh",
          display: "flex",
          alignItems: "center",
          background: "url('https://wallpaperaccess.com/full/374174.jpg')",
          /* Create the parallax scrolling effect */
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}>
          <Container>
            <Row style={{backgroundColor: "black"}}>
              <Col>
                <p style={{fontSize: "35px" }}>It shouldn’t take 30 messages to schedule 30-minute meetings</p>
                <p style={{fontSize: "50px" }}>Book meetings faster with MeetSync</p>
              </Col>
            </Row>
          </Container>
        
      </div>
    );
  }
}

export default Landing;
