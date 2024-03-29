import { useState } from "react";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHatWizard } from "@fortawesome/free-solid-svg-icons";
import { faDragon } from "@fortawesome/free-solid-svg-icons";
import { faDiceD6 } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar expand="md" className="navbar navbar-light">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar className="justify-content-end">
          <Nav navbar>
            <NavItem>
              <Link className="nav-link" to="/about">
                <FontAwesomeIcon icon={faHatWizard} /> About
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/create">
                <FontAwesomeIcon icon={faDiceD6} /> Create
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/allscores">
                <FontAwesomeIcon icon={faDragon} /> Your Scores
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
