import React from "react";
import Layout from "../components/layout";
import { Button } from 'reactstrap';
import Link from "next/link";
import { auth, firebase } from '../components/Firebase/firebase'

export default class Home extends React.Component {
	render() {
		return (
			<Layout>
				<section>
					<div className="container" style={{ color: 'white'}}>
						<h1 className="text-center">MEETSYNC</h1>
						<p style={{ fontSize: "20px"}} className="text-center">Utility to plan regular meeting times using individual input</p>
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