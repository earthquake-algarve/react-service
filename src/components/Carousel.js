import Carousel from 'react-bootstrap/Carousel';
import './carousel.css'
import BenagilCard from './BenagilCard';
import SlideSplahCard from './SlideSplashCard';
import ZooCard from './ZooCard';
import NightCard from './NightCard';
import WineCard from './WineCard';
import FoiaCard from './FoiaCard';

export default function CarouselCards() {
  return (
    <Carousel variant="dark">
      <Carousel.Item>

        <BenagilCard />
      </Carousel.Item>

      <Carousel.Item>
        <SlideSplahCard />
      </Carousel.Item>

      <Carousel.Item>
        <ZooCard />
      </Carousel.Item>

      <Carousel.Item>
        <NightCard />
      </Carousel.Item>

      <Carousel.Item>
        <WineCard />
      </Carousel.Item>

      <Carousel.Item>
        <FoiaCard />
      </Carousel.Item>

    </Carousel>
  );
}
