import React from "react";
import { Container, Form, Button, Card } from "react-bootstrap";

export default class Contact extends React.Component {
    render() {
        return(
         <Container className="d-flex justify-content-center align-items-center vh-100" style={{width:'500px' }}>
            <Card style={{ width: "450px", padding: "30px" }} className="shadow">
            <h1 className="text-center">Contact us</h1>
            <Form className="mt-4">
                <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted mt-2">
                We'll never share your email with anyone else.
                </Form.Text>
                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                  <Form.Group className="mb-4" controlId="checkbox">
                <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button className="mb-4" variant="dark" type="submit">Submit</Button>
            </Form>
            </Card>
         </Container>
    )
}
}