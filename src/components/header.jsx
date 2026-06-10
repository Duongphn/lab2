// nav bar SHOP FASHION logo Home Products Men Women Contact Shopping Cart icon
// number of items in cart is updated automatically. The initial number of items in the cart is 0.
import { Navbar, Nav, Container, Badge } from "react-bootstrap";
import { BsCart3 } from "react-icons/bs";

function Header({ cartCount }) {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#home" className="fw-bold">
          <img
            src="https://i.pinimg.com/1200x/ce/e3/b5/cee3b5d68b41bec08d95eab5e4c2ece2.jpg"
            alt="Shop Fashion logo"
            height="40"
            style={{ objectFit: "contain" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#products">Products</Nav.Link>
            <Nav.Link href="#men">Men</Nav.Link>
            <Nav.Link href="#women">Women</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#cart" className="position-relative d-flex align-items-center">
              <BsCart3 size={22} />
              <span className="ms-1">Cart</span>
              <Badge bg="danger" pill className="ms-1">
                {cartCount}
              </Badge>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
