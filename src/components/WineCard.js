import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import './carousel.css'

export default function WineCard(){
    return (
        <>
            <Card width={150} height={240}>
            <Card.Img variant='top' src='https://contes-toten-api.herokuapp.com/passeio/get/7' width={150} height={240}/>

            <Card.Body>
                <Card.Title>Wine Tour</Card.Title>
                <Button >Book Now</Button>
            </Card.Body>

            </Card>
        </>
    )
}


