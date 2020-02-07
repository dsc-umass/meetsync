import React from "react";
import Layout from "../components/layout";
import Link from "next/link";
import { auth, firebase } from '../components/Firebase/firebase'

export default class Home extends React.Component {
	render() {
		return (
			<Layout>
				<section className="text-center">
					<div className="container">
						<h1>Home</h1>
					</div>
				</section>
			</Layout>
		);
	}
}
