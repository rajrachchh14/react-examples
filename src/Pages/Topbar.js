import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'; //  NavLink,
import { Link } from 'react-router-dom';
function Topbar() {
  return (
    // <>
    //   <Link to="/">Home Page</Link>

    //   <Link to="/list">List</Link>

    //   <Link to="/detail">Detail</Link>

    //   <Link to="/search">Searchs</Link>

    //   <Link to="/create">Create</Link>
    // </>

    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Webcode</Navbar.Brand>

        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">
            Home Page
          </Nav.Link>

          <Nav.Link as={Link} to="/list">
            List
          </Nav.Link>

          <Nav.Link as={Link} to="/detail">
            Detail
          </Nav.Link>

          <Nav.Link as={Link} to="/search">
            Searchs
          </Nav.Link>

          <Nav.Link as={Link} to="/create">
            Create
          </Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
}

export default Topbar;
