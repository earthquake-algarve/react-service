import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './cards.css'

export default function Cards() {
  return (
    <Card className='cards'>
      <img src="../img/benagil.jpg" width={300} height={240}/>
      <Card.Body>
        <Card.Title>Grutas de Benagil</Card.Title>
        <Card.Text>
          Portimão
        </Card.Text>
        <Button variant="primary">Book Now</Button>
      </Card.Body>
    </Card>
  );
}

