// 6 product each with image, name, price, status, action button "Add to Cart".
// out of stock -> "Out of Stock" + disabled button; in stock -> "In Stock" + enabled.
// when user clicks "Add to Cart", cart count updates. Responsive grid.
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "./ProductCard";
import products from "../data/products";

function ProductList({ onAddToCart }) {
  return (
    <Container id="products" className="my-5">
      <h2 className="text-center mb-4" style={{ color: "#aa3bff" }}>
        Our Products
      </h2>
      <Row xs={1} sm={2} md={3} className="g-4">
        {products.map((product) => (
          <Col key={product.id}>
            <ProductCard product={product} onAddToCart={onAddToCart} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProductList;
