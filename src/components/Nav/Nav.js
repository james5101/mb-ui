import React from "react";
import { IconContext } from "react-icons";
import { FaTruckMoving } from "react-icons/fa";
import { Container,Nav, Navbar, NavbarBrand, Button, FormControl, Form, NavLink , NavItem} from "react-bootstrap";

let iconStyles = { margin: "10px", "margin-right": ".8rem", transition: 'all .5s ease' };
const NavbarMB = () => {


    return (
        <div>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Navbar className="navbar-dark bg-dark">
                    <NavbarBrand href="/">
                        <FaTruckMoving style={iconStyles} />
                        Moving Butlers
                    </NavbarBrand>
                    <Nav className="ml-auto">
                        <NavItem>
                            <NavLink href="#home">Home</NavLink>
                        </NavItem>
                        <NavItem>   
                            <NavLink href="#services">Services</NavLink>
                        </NavItem>
                        <NavItem>  
                            <NavLink href="#about">About</NavLink>
                        </NavItem>
                        <Button size="md">Login</Button>
                    </Nav>
                </Navbar>
            </IconContext.Provider>
        </div>

    )
}

export default NavbarMB;