import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';

export default function ZooCard(){
    return (
        <>
            <Card width={150} height={140}>
                <Card.Img variant='top' src='https://contes-toten-api.herokuapp.com/passeio/get/6' width={150} height={240}/>
                
                <Card.Body>
                    <Card.Title>Zoo de Lagos</Card.Title>
                    <Button >Book Now</Button>
                </Card.Body>

            
            </Card>
        
        </>
    )
}
