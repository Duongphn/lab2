// using react bootstrap carousel
// 3 slide each slide include promotion image, title, short description. auto switch every 5 seconds.
// also include next and previous buttons to manually switch slides. responsive.
import { Carousel } from "react-bootstrap";

const slides = [
  {
    id: 1,
    image:
      "https://i.pinimg.com/1200x/15/20/83/152083b6beb25c55e36aac7331ddd290.jpg",
    title: "FASHION COLLECTION 2026",
    description: "Discover the latest trends in fashion trends for 2026.",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?w=1400&q=80",
    title: "SUMMER SALE UP TO 50%",
    description: "Enjoy special discounts on selected products.",
  },
  {
    id: 3,
    image:
      "https://i.pinimg.com/1200x/d8/2a/33/d82a33fd312477499dd861c1fc1ffe38.jpg",
    title: "NEW ARRIVALS",
    description: "Explore our newest clothing collection.",
  },
];

function Banner() {
  return (
    <Carousel interval={5000} controls indicators fade>
      {slides.map((slide) => (
        <Carousel.Item key={slide.id}>
          <img
            className="d-block w-100"
            src={slide.image}
            alt={slide.title}
            style={{ height: "420px", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h3>{slide.title}</h3>
            <p>{slide.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Banner;
