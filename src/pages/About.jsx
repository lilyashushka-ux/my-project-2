import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class About extends React.Component {
    render() {
        return(
        <Container className="mt-3 pt-5">
          <Tab.Container id="left-tabs-example" defaultActiveKey="First">
            <Row>
          <Col sm={3}>
          <Nav variant="pills" className="flex-column mt-3">
          <Nav.Item>
            <Nav.Link eventKey="First">Our Values</Nav.Link>
          </Nav.Item>
           <Nav.Item>
            <Nav.Link eventKey="Second">Our Champions</Nav.Link>
          </Nav.Item>
           <Nav.Item>
            <Nav.Link eventKey="Third">Our Puppiies</Nav.Link>
          </Nav.Item>
           <Nav.Item>
            <Nav.Link eventKey="Fourth">Our Condition</Nav.Link>
          </Nav.Item>
           <Nav.Item>
            <Nav.Link eventKey="Fifth">Our History</Nav.Link>
          </Nav.Item>
           </Nav>
          </Col>
          <Col sm={9}>
          <Tab.Content className="mt-3">
            <Tab.Pane eventKey="First">
          <img src="" alt="" />
          <p>Values</p>
            </Tab.Pane>
              <Tab.Pane eventKey="Second">
          <img src="" alt="" />
          <p>Champions</p>
            </Tab.Pane>
              <Tab.Pane eventKey="Third">
          <img src="" alt="" />
          <p>Puppies</p>
            </Tab.Pane>
              <Tab.Pane eventKey="Fourth">
          <img src="" alt="" />
          <p>Condition</p>
            </Tab.Pane>
              <Tab.Pane eventKey="Fifth">
          <img src="" alt="" />
          <p>History</p>
            </Tab.Pane>
          </Tab.Content>
           </Col>
            </Row>
          </Tab.Container>
        </Container>
    )
}
}
