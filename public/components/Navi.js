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

const Navi = props => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<div>
			<Navbar color="dark" dark expand="md">
				<NavbarBrand href="/">MeetSync</NavbarBrand>
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className="ml-auto" navbar>
						<NavItem>
							<Link href="/">
								<NavLink className="click">Home</NavLink>
							</Link>
						</NavItem>
						<NavItem>
							<Link href="/about">
								<NavLink className="click">About</NavLink>
							</Link>
						</NavItem>
						<NavItem>
							<NavLink
								href="https://github.com/dsc-umass/meetsync"
								target="_blank"
							>
								GitHub
							</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		</div>
	);
};

export default Navi;
