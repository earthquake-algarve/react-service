import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';


export default function FoiaCard(){
    return (
        <>
            <Card width={150} height={240}>
            <Card.Img variant='top' src='https://contes-toten-api.herokuapp.com/passeio/get/10' width={150} height={240}/>

            <Card.Body>
                <Card.Title>Foia Tour</Card.Title>
                <Button >Book Now</Button>
            </Card.Body>

            </Card>
        </>
    )
}

