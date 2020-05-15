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
			<Navbar className="fixed-bottom">
                <a href="https://github.com/dsc-umass/meetsync" target="_blank" className="text-muted">
                    <FaGithub /> {VERSION}
                </a>
            </Navbar>
		</div>
	);
};

export default Foot;