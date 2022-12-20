import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './mainCard.css'

export default function MainCard() {
  return (
    <Card id="mainCard" className='mainCard'>
      <Card.Img variant='top' id="card-img" src='http://entertours-ofertas.us-east-1.elasticbeanstalk.com/get/20c0adc1-3d9c-4fe7-92af-1141ccc14eee' />

      <Card.ImgOverlay variant="bottom">
        <Button id='main-btn' href="/details">Book Now</Button>
      </Card.ImgOverlay>

      <Card.Body>
        <Card.Title>Grutas de Benagil</Card.Title>
        <Card.Title><h3>28€</h3></Card.Title>
      </Card.Body>

      <Card.Text>
        Portimão
      </Card.Text>

    </Card>
  );
}

