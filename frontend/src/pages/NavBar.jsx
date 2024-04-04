import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCalendarAlt, FaListUl, FaUser } from 'react-icons/fa';
import { FaNoteSticky } from 'react-icons/fa6';
import { IoMdSettings } from 'react-icons/io';

const NavBar = ({ id }) => {
  const goodUris = ['calendar', 'dashboard', 'notes', 'todo', 'settings'];

  const iconStyle = {
    fontSize: '24px',
    marginLeft: '8px',
    marginTop: '0px',
    marginBottom: '4px',
  };

  const location = useLocation();
  const path = location.pathname.split('/')[1];

  if (!goodUris.some(basePath => path.startsWith(basePath))) {
    return null;
  }

  return (
    <Navbar bg="primary" variant="dark" className="fixed-top d-flex justify-content-center px-4">
      <Navbar.Brand as={NavLink} to="/dashboard" style={iconStyle}>Welcome</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link as={NavLink} to={`/calendar/${id}`} style={iconStyle}><FaCalendarAlt /></Nav.Link>
        <Nav.Link as={NavLink} to={`/todo/${id}`} style={iconStyle}><FaListUl /></Nav.Link>
        <Nav.Link as={NavLink} to={`/notes/${id}`} style={iconStyle}><FaNoteSticky /></Nav.Link>
        <Nav.Link as={NavLink} to={`/settings/${id}`} style={iconStyle}><IoMdSettings /></Nav.Link>
      </Nav>
      <Navbar.Text className="text-light ml-auto">
        <FaUser />
      </Navbar.Text>
    </Navbar>
  );
};

export default NavBar;
