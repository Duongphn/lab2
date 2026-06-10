// display student name, student ID, class name, email address.
import { Container } from "react-bootstrap";

function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container className="text-center">
        <p className="mb-1 fw-bold">SHOP FASHION</p>
        <p className="mb-1">Student Name: Phan Hoang Duong</p>
        <p className="mb-1">Student ID: HE186960</p>
        <p className="mb-1">Class: SE2009-NJ</p>
        <p className="mb-0">Email: duongphhe186960@fpt.edu.vn</p>
      </Container>
    </footer>
  );
}

export default Footer;
