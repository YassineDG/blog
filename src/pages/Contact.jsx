import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../styles/contact.css';
import Container from 'react-bootstrap/Container';

export default function Contact() {
    return (
        <>
            <Container>
                <h1>
                    Contact Us
                </h1>
                <Form >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="Name" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control type="Subject" placeholder="Subject" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>

        </>
    )
}
