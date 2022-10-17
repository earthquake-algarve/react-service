import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './mainCard.css'

export default function MainCard() {
  return (
    <Card className='mainCard'>
      <Card.Img variant='top' src='https://contes-toten-api.herokuapp.com/passeio/get/5' width={300} height={240}/>

      <Card.ImgOverlay variant="bottom">
        <Button >Book Now</Button>
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

