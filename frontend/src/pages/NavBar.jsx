import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCalendarAlt, FaListUl, FaUser } from "react-icons/fa";
import { FaNoteSticky } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";

const NavBar = () => {

    const iconStyle = {
        fontSize: '24px',
        marginLeft: '8px',
        marginTop: '0px',    
        marginBottom: '4px',
      };

    return (
        <Navbar bg="primary" variant="dark" className="fixed-top d-flex justify-content-center px-4">
        <Navbar.Brand href="/dashboard" style={iconStyle}>Welcome</Navbar.Brand>
        <Nav className="me-auto">
            <Nav.Link href="/calendar" style={iconStyle}><FaCalendarAlt/></Nav.Link>
            <Nav.Link href="/todo" style={iconStyle}><FaListUl /></Nav.Link>
            <Nav.Link href="/notes" style={iconStyle}><FaNoteSticky /></Nav.Link>
            <Nav.Link href="/settings" style={iconStyle}><IoMdSettings /></Nav.Link>
        </Nav>
            <Navbar.Text className="text-light ml-auto">
                <FaUser />
            </Navbar.Text>
        </Navbar>
    );
    };

export default NavBar;
