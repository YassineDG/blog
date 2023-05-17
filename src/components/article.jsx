import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../styles/article.css';
import Col from 'react-bootstrap/Col';


function Article(props) {

    return (
    
 
         <Col>
        <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.img} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        {props.content}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            </Col>
         

      
    )
}

export default Article