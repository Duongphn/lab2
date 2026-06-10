// using react bootstrap carousel
// 3 slide each slide include promotion image, title, short description. auto switch every 5 seconds.
// also include next and previous buttons to manually switch slides. responsive.
import { Carousel } from "react-bootstrap";

const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1400&q=80",
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
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1400&q=80",
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
