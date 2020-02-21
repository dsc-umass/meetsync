import React from "react";
import Layout from "../components/layout";
import { Button } from 'reactstrap';
import Link from "next/link";
import { auth, firebase } from '../components/Firebase/firebase'
import router from "next/router";

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
				<section>
					<div className="container" style={{ color: 'white'}}>
						<h1 className="text-center">MEETSYNC</h1>
						<p style={{ fontSize: "20px"}} className="text-center">MeetSync helps you set up meetings <br /> without a 30 person group chat</p>
						
						<div className="form-group form-inline" style={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center"
							}}>
							
							<div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
								<input type="text" className="form-control" name="username" value={username} onChange={this.handleChange} placeholder="Enter your username" />
								{submitted && !username &&
									<div className="help-block">Username is required</div>
								}
							</div>
							<button className="btn btn-primary" disabled={loading} onClick={this.goToSignup}>Sign Up</button>
							{loading &&
								<img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
							}
						</div>
						
						<br />
						<h2>STEPS TO USE</h2>
						<ol style={{ fontSize: "20px"}} >
							<li>Admin creates an account </li>
							<li>Admin creates a new event</li>
							<li>Admin writes down an email list</li>
							<li>All users receive a unique link</li>
						</ol>
						
						
						<h2>Features</h2>
						<ul style={{ fontSize: "20px"}}>
							<li>Create Events the Most Club Members can Attend</li>
							<li>Admins receive recommendations to satisfy the most club members</li>
						</ul>

						<br />
						<div align="center" >
							<Button size="lg" color="primary">
								<Link href="/login">
									<a style={{ color: 'white'}}>Sign In Page</a>
								</Link>
							</Button>{' '}
						</div>
						
						
					</div>
				</section>
			</Layout>
		);
	}
}

/*
<h2>STEPS TO USE</h2>
<div className="row">
	<div className="col">
		<ol style={{ fontSize: "20px"}} >
			<li fontSize="30">Admin creates an account </li>
			<li>Admin creates a new event</li>
			<li>Admin writes down an email list</li>
			<li>All users receive a unique link</li>
		</ol>
	</div>
</div>
<div className="col">
	<div className="btn-group">
		<Button size="sm">
			<Link href="/signup">
				<a style={{ color: 'white'}}>Sign Up</a>
			</Link>
		</Button>{' '}
		<Button size="sm">
			<Link href="/signup">
				<a style={{ color: 'white'}}>Create Event</a>
			</Link>
		</Button>{' '}
	</div>
	
</div>
*/