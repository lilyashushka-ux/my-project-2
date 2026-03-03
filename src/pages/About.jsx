import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import puppy from "../assets/puppy.jpg";
import puppy2 from "../assets/puppy-2.jpg";
import puppy3 from "../assets/puppy-3.jpg";

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
          
          <p>Values</p>
            </Tab.Pane>
              <Tab.Pane eventKey="Second">
        
          <p>Champions</p>
            </Tab.Pane>
              <Tab.Pane eventKey="Third">
                <div className="d-flex justify-content-center gap-4 flex-wrap">
          <img src={puppy} alt="Puppy" width={500} height={300} />
          <img src={puppy2} alt="Puppy" width={500} height={300} />
          <img src={puppy3} alt="Puppy" width={500} height={300} />
          </div>
          <div className="mt-5">
          <h2>Our Border Collie Puppies</h2>
          <p>Our Border Collie puppies are a perfect combination of excellent bloodlines, balanced temperament, and deep devotion to people. We carefully select our breeding pairs to ensure that every puppy inherits the very best qualities of the breed: intelligence, endurance, obedience, and energy.</p>
<p>Border Collies are known as one of the most intelligent dog breeds in the world. They learn quickly, enjoy training, and thrive in active families. They are perfect companions for sports, agility, herding, or simply for those who love an energetic and loyal friend.</p>
<ul>
  <h6>All of our puppies</h6>
  <li>Receive regular veterinary check-ups</li>
  <li>Are vaccinated according to their age</li>
  <li>Are raised in a loving, family environment</li>
  <li>Begin early socialization from the first weeks of life</li>
</ul>
<p>We place special attention on proper social development. Our puppies grow up surrounded by everyday household sounds, human interaction, and positive experiences, helping them become confident and well-balanced dogs.</p>
<p>Before going to their new homes, each puppy comes with the necessary documents and detailed care recommendations. We are always happy to stay in touch with new owners and support you throughout your puppy’s growth.</p>
<p>Choosing a puppy from our kennel means gaining not just a dog, but a loyal companion for many wonderful years.</p>
</div>
            </Tab.Pane>
              <Tab.Pane eventKey="Fourth">
          
          <p>Condition</p>
            </Tab.Pane>
              <Tab.Pane eventKey="Fifth">
          
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
