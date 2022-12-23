import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './mainCard.css'

export default function MainCard({ mainCard }) {

  const { id, nome, valor, local } = { ...mainCard }

  const URL = 'http://entertours-ofertas.us-east-1.elasticbeanstalk.com/get/'
  let url = id !== undefined ? `${URL}${id}` : ''

  return (
    <Card id="mainCard" className='mainCard'>
      <Card.Img variant='top' id="card-img" src={url} />

      <Card.ImgOverlay variant="bottom">
        <Button id='main-btn' href="/details">Book Now</Button>
      </Card.ImgOverlay>

      <Card.Body>
        <Card.Title>{nome}</Card.Title>
        <Card.Title><h3>{valor}€</h3></Card.Title>
      </Card.Body>

      <Card.Text>
        {local}
      </Card.Text>

    </Card>
  );
}

