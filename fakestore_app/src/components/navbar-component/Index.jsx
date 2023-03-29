import { useContext } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../provider/Index";

function NavbarComponent() {

  const globalStore = useContext(GlobalContext);
  const setCheckHome = globalStore.setCheckHome;

  return (
    <Navbar bg="primary" expand="lg" sticky="top" className="sticky-top">
      <Navbar.Brand className="text-light" as={Link} to="/" onClick={()=> setCheckHome(true)}>
        e-Store
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto ">
          <Nav.Link className="text-light" as={Link} to="/" onClick={()=> setCheckHome(true)}>
            Home
          </Nav.Link>
          <Nav.Link className="text-light" as={Link} to="/products">
            Products
          </Nav.Link>
          <Nav.Link className="text-light" as={Link} to="/cart">
            Cart
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComponent;
