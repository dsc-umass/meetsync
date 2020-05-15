import React from "react";
import Layout from "../components/MainLayout";
import { Container, Row, Col, Button } from 'reactstrap';
import router from "next/router";
import Link from "next/link"
import Landing from '../components/Landing'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faDonate } from "@fortawesome/free-solid-svg-icons";

export default class Home extends React.Component {
	constructor(props) {
        super(props);
//        userService.logout();
        this.state = {
            username: '',
			submitted: false,
			loading: ''
        };
        this.handleChange = this.handleChange.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);
    }
	handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
	goToSignup() {
		console.log("BLAH");
		router.push("/signup");
	}
	render() {
		const { username, submitted, loading } = this.state;
		return (
			<Layout>
				<header>
          <Landing />
				</header>
				<section>
          <Container>
            <h1>ABOUT</h1>
            <hr />
            <p>Project created for school clubs to set up regular meetings for the coming semester</p>
            <p>enables you to effortlessly schedule club meetings</p>
            <p>Brought to you by the UMass DSC Developers</p>
            <img src="/assets/acm_umass.jpg" alt="UMass Image" style={{maxWidth:"880px"}}/>
            <div style={{alignItems: "center", display: "flex",}}>
              <Row>
                <>
                  <Link href="/signup">
                    <Button color="primary">Try It</Button>
                  </Link>
                </>
                <>
                  <a href="https://www.patreon.com/" target="_blank">
                    <Button color="success">
                      <FontAwesomeIcon icon={faDonate} className="mr-2" /> Donate
                    </Button>
                  </a>
                </>
                <>
                  <a href="https://github.com/dsc-umass/meetsync" target="_blank">
                    <Button color="secondary">
                      <FontAwesomeIcon icon={faGithub} className="mr-2" /> GitHub
                    </Button>
                  </a>
                </>
              </Row>
            </div>
            
          </Container>
				</section>
			</Layout>
		);
	}
}