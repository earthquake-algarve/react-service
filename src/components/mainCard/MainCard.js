import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './mainCard.css'

export default function MainCard({ mainCard }) {
  return (
    <Card id="mainCard" className='mainCard'>
      <Card.Img variant='top' id="card-img" src={`http://entertours-ofertas.us-east-1.elasticbeanstalk.com/get/${mainCard.id}`} />

      <Card.ImgOverlay variant="bottom">
        <Button id='main-btn' href="/details">Book Now</Button>
      </Card.ImgOverlay>

      <Card.Body>
        <Card.Title>{mainCard.nome}</Card.Title>
        <Card.Title><h3>{mainCard.valor}€</h3></Card.Title>
      </Card.Body>

      <Card.Text>
        {mainCard.local}
      </Card.Text>

    </Card>
  );
}

