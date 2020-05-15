import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBriefcase,
  faPaperPlane,
  faQuestion,
  faImage,
  faCopy,
} from "@fortawesome/free-solid-svg-icons";
import { NavItem, NavLink, Nav, Button } from "reactstrap";
import classNames from "classnames";
import withAuth from '../functions/withAuth';



const signOutStyling = {
    position: "absolute",
    display: "inline-block",
    bottom: "80px",
    left: "30px"
}
class Sidebar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: props.isOpen,
      username: props.username
    }
  }
  
  handleLogout = () => {
    auth.signOut().then(function () {
        alert('Logout successful');
    }).catch(function (error) {
        alert('OOps something went wrong check your console');
        console.log(err);
    });
    router.push('/');
  }

  render() {
    const { isOpen, username } = this.state
    return (
      <div className={classNames("sidebar", { "is-open": isOpen })}
        style={{
          background: "url(https://demos.creative-tim.com/material-dashboard-react/static/media/sidebar-3.25031690.jpg)",
          height:"900px"
        }}
      >
        <div className="sidebar-header">
          <h1>Welcome, { username }</h1>
        </div>
        <hr/>
        <div className="side-menu" style={{ fontSize: "20px"}}>      
          <Nav vertical>
            <NavItem>
              <NavLink href="/profile" style={{color: "inherit"}}>
                <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
                Profile
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/dashboard" style={{color: "inherit"}}>
                <FontAwesomeIcon icon={faImage} className="mr-2" />
                Dashboard
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/events" style={{color: "inherit"}}>
                <FontAwesomeIcon icon={faImage} className="mr-2" />
                Events
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact" style={{color: "inherit"}}>
                <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
                Support
              </NavLink>
            </NavItem>
 
            <NavItem style={signOutStyling}>
              <Button color="primary" onClick={this.handleLogout}>Sign Out</Button>  
            </NavItem>
            
          </Nav>
        </div>
      </div>
    )
  }
  
};

export default withAuth(Sidebar);