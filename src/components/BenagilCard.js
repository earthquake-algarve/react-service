import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import './carousel.css'


export default function CarouselCard() {
    return (
      <>
        <Card width={150} height={240}>
            <Card.Img variant='top' src='https://contes-toten-api.herokuapp.com/passeio/get/5' width={150} height={240}/>
    
            <Card.Body className='cardbenagil'>
              <Card.Title className='titlebenagil'>Grutas Benagil</Card.Title>
              <Button className='benagil-btn' >Book Now</Button>
            </Card.Body>

        </Card>

      </>
    );
  }
  