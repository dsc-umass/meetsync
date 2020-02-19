import React, { useState } from "react";
import Link from "next/link";
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink
} from "reactstrap";
//import { FaBeer } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

const Navi = props => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<div >
			<Navbar color="dark-secondary" dark expand="md">
				<div className="col-md-2" ></div>
				<NavbarBrand href="/">MeetSync</NavbarBrand>
				<NavLink
					href="https://github.com/dsc-umass/meetsync"
					target="_blank"
				>
					<FaGithub size={30} color='aliceblue'/>
				</NavLink>
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className="ml-auto" navbar>
						<NavItem>
							<Link href="/">
								<NavLink className="click">Home</NavLink>
							</Link>
						</NavItem>
						<NavItem>
							<Link href="/login">
								<NavLink className="click">Login</NavLink>
							</Link>
						</NavItem>
						<NavItem>
							<Link href="/dashboard" >
								<NavLink className="click">Dashboard</NavLink>
							</Link>
						</NavItem>
					</Nav>
				</Collapse>
				<div className="col-md-2 col-md-offset-0" ></div>
			</Navbar>
			
		</div>
	);
};

export default Navi;
