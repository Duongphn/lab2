// Each product includes an image, name, price, status, and an action button "Add to Cart".
// If out of stock -> status "Out of Stock" and button disabled. If in stock -> "In Stock" and enabled.
// when user clicks add to cart, the cart count is updated accordingly. Responsive.
//change text when click add to cart to "Added" change color from success to secondary and disable button for 1 second before reverting back to "Add to Cart" and enabled.
import { useState } from "react";
import { Card, Button, Badge, Alert } from "react-bootstrap";

function ProductCard({ product, onAddToCart }) {
  const { name, price, image, inStock } = product;
  const [added, setAdded] = useState(false);

  const handleClick = () => {
    onAddToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <Card className="h-100 shadow-sm">
      <Card.Img
        variant="top"
        src={image}
        alt={name}
        style={{ height: "260px", objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="fs-6">{name}</Card.Title>
        <Card.Text className="fw-bold text-primary mb-2">
          ${price.toFixed(2)}
        </Card.Text>
        <div className="mb-3">
          <Badge bg={inStock ? "success" : "secondary"}>
            {inStock ? "In Stock" : "Out of Stock"}
          </Badge>
        </div>
        <Button
          variant={added ? "secondary" : "success"}
          className="mt-auto"
          disabled={!inStock || added}
          onClick={handleClick}
        >
          {added ? "Added to Cart" : "Add to Cart"}
        </Button>
        <Alert variant="success" show={added}>
          Item added to cart!
        </Alert>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
