import React from "react";
import Layout from "../components/MainLayout";

export default class Home extends React.Component {
	render() {
		return (
			<Layout>
				<section className="text-center">
					<div className="container">
						<h1>About</h1>
					</div>
				</section>
			</Layout>
		);
	}
}
