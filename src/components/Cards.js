import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './cards.css'

export default function Cards() {
  return (
    <Card className='cards'>
      <Card.Img variant='top' src='https://cdn.algarvefun.com/wp-content/uploads/2015/10/10194636/algarve-holiday-fun-algar-benagil.jpg' width={300} height={240}/>
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

