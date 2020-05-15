import React, { Component } from "react";
import Link from "next/link";
import { Container, Row, Col } from 'reactstrap'

class Landing extends Component {
  render() {
    return (
      <Container 
        style={{
          height: "100vh",
          width: "120vh",
          display: "flex",
          alignItems: "center",
          background: "url('https://i.ytimg.com/vi/gUIJ-UkQsXI/maxresdefault.jpg')",
          /* Create the parallax scrolling effect */
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}>
        <Row>
          <Col>
            <h1>MeetSync</h1>
            <h4>set up club meetings with ease</h4>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Landing;
