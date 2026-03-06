import React from "react";
import { Container, Form, Button, } from "react-bootstrap";

export default class Contact extends React.Component {
    render() {
        return(
         <Container style={{width:'500px', marginTop:'100px', }}>
            <h1 className="text-center">Contact us</h1>
            <Form>
                <Form.Group contropId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control aria-rowspan={3} type="password" placeholder="Password" />
                </Form.Group>
                  <Form.Group controlId="checkbox">
                <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="dark" type="submit">Submit</Button>
            </Form>
         </Container>
    )
}
}