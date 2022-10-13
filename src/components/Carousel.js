import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button'
import Cards from '../components/Cards'
import './carousel.css'

export default function CarouselCards() {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fdiscoverportugal2day.com%2Fserra-de-monchique%2F2%2F&psig=AOvVaw3-uWuRmZVTx5hqVpo-YmHg&ust=1665761543443000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCPjRibvD3foCFQAAAAAdAAAAABAI"
          alt="Foia"  //problema com CORS
        />
        <Carousel.Caption>
          <h5>Foia</h5>
        </Carousel.Caption>
        <Button >Book Now</Button>
        {/* <Cards /> */}
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=eee"
          alt="Night-out Lagos"
        />
        <Carousel.Caption>
          <h5>Night-out Lagos</h5>
        </Carousel.Caption>
        <Button >Book Now</Button>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=e5e5e5"
          alt="Wine"
        />
        <Carousel.Caption>
          <h5>Wine</h5>
        </Carousel.Caption>
        <Button >Book Now</Button>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=e5e5e5"
          alt="Slide Splash"
        />
        <Carousel.Caption>
          <h5>Slide Splash</h5>
        </Carousel.Caption>
        <Button >Book Now</Button>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=e5e5e5"
          alt="Zoo de Lagos"
        />
        <Carousel.Caption>
          <h5>Zoo de Lagos</h5>
        </Carousel.Caption>
        <Button >Book Now</Button>
      </Carousel.Item>

    </Carousel>
  );
}
