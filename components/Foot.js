import React, { useState } from "react";
import Link from "next/link";
import {
    Navbar,
} from "reactstrap";
import { FaGithub } from 'react-icons/fa';

const Foot = props => {
	const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

	return (
		<div >
			<Navbar fixed className="fixed-bottom">
                <Link href="https://github.com/dsc-umass/meetsync">
                    <a className="text-muted"><FaGithub /> {VERSION}</a>
                </Link>
            </Navbar>
		</div>
	);
};

export default Foot;