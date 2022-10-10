import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Cards() {
  return (
    <Card style={{margin: '5rem' , width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
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

