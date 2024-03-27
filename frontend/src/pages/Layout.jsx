import React from 'react';
import NavbarComponent from '../pages/NavBar';
import { Container } from 'react-bootstrap';

const Layout = ({ children }) => {
  return (
    <>
      <NavbarComponent />
      <Container>{children}</Container>
    </>
  );
};

export default Layout;
