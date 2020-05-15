import React from "react";
import Layout from "../components/MainLayout";
import { Container, Row, Col } from 'reactstrap';
import Link from "next/link";
import { auth, firebase } from '../components/Firebase/firebase'
import router from "next/router";
import Landing from '../components/Landing'

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
          </Container>
        </section>
			</Layout>
		);
	}
}