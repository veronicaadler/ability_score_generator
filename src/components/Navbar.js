import React, { useState } from "react";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from "reactstrap";

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen); 

    return (
        <div>
            <Navbar expand="sm" className="navbar">
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar className="justify-content-end">
            <Nav navbar>
                <NavItem>
                    <NavLink href="">About</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="">Login</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="">Create Account</NavLink>
                </NavItem>
            </Nav>
            </Collapse>
            </Navbar>
        </div>
    )
}

export default NavBar;