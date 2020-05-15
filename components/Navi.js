import React, { useState } from "react";
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink
} from "reactstrap";

const Navi = props => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<div >
			<Navbar color="dark-secondary" dark expand="md">
				<div className="col-md-2" ></div>
				<NavbarBrand href="/">MeetSync</NavbarBrand>
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className="ml-auto" navbar>
						<NavItem>
							<NavLink href="/">Home</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/login">Login</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/dashboard/dashboard">Dashboard</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
				<div className="col-md-2 col-md-offset-0" ></div>
			</Navbar>
			
		</div>
	);
};

export default Navi;
