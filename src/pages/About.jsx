import React from "react";
import { Container, Row, Col, Tab, Nav, Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import puppy from "../assets/puppy.jpg";
import puppy2 from "../assets/puppy-2.jpg";
import puppy3 from "../assets/puppy-3.jpg";
import value from "../assets/value-2.jpg";
import value1 from "../assets/value-3.jpg";
import value2 from "../assets/value-4.jpg";
import value3 from "../assets/value-5.jpg";
import checkIcon  from "../assets/dog.icon.svg";
import champ1 from "../assets/champ-1.jpg";
import champ2 from "../assets/champ-2.jpg";
import champ3 from "../assets/champ-3.jpg";


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
              <Container className="mt-4">
  <Row className="g-4">
    <Col md={6}>
      <Card>
        <Card.Img variant="top" src={value} width={500} height={300} />
        <Card.Body>
          <Card.Text>
           From the very first weeks of life, our puppies are raised in close contact with people. They grow up surrounded by care, attention, and daily interaction, which helps them develop trust, confidence, and emotional stability. We gently introduce them to new experiences, voices, and environments to build a healthy and secure attachment.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
      <Col md={6}>
      <Card className="h-100 shadow-sm">
        <Card.Img variant="top" src={value1} width={500} height={300} />
        <Card.Body>
          <Card.Text>
     At our kennel, training is not just an option — it is an essential part of raising a balanced and confident Border Collie. This breed is known for its exceptional intelligence, quick learning ability, and strong desire to work alongside its owner. Without proper mental stimulation, a Border Collie cannot fully thrive.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
     <Col md={6}>
      <Card className="h-100 shadow-sm">
        <Card.Img variant="top" src={value2} width={500} height={300} />
        <Card.Body>
          <Card.Text>
    We believe that positive early exposure helps prevent fear and anxiety later in life. A well-socialized Border Collie grows into a balanced dog that adapts easily, remains calm in new situations, and builds healthy relationships with both humans and other animals
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col md={6}>
      <Card className="h-100 shadow-sm">
        <Card.Img variant="top" src={value3} width={500} height={300} />
        <Card.Body>
          <Card.Text>
  Proper nutrition is the foundation of a puppy’s healthy growth and long-term well-being. In our kennel, we pay special attention to providing balanced, high-quality food that supports strong bones, healthy joints, a shiny coat, and stable digestion.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
       </Row>
</Container>
            </Tab.Pane>
            <Tab.Pane eventKey="Second">
               <Container className="mt-5">
  <Row className="g-4">
    <Col xs={12}>
      <Card className="shadow-sm">
        <Row className="g-0 align-items-center">
          <Col md={5}>
            <Card.Img
              src={champ1}
              style={{ height: "100%", objectFit: "cover" }}
            />
          </Col>
          <Col md={7}>
            <Card.Body>
              <Card.Title>Dog Shows & Our Champions</Card.Title>
              <Card.Text>  
        Our dogs regularly participate in national and international dog shows and competitions. For us, titles are not just awards — they are confirmation of responsible breeding, professional training, and genuine love for every dog.
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Col>
    <Col xs={12}>
      <Card className="shadow-sm">
        <Row className="g-0 align-items-center">
           <Col md={5}>
            <Card.Body>
              <Card.Title>We are proud</Card.Title>
              <Card.Text>
               of our champions who have received high evaluations from judges and earned titles such as Best Junior, Best of Breed, and Champion. Every victory is the result of dedication, proper socialization, and quality care from the very first days of life.
              </Card.Text>
            </Card.Body>
          </Col>
            <Col md={7}>
            <Card.Img
              src={champ2}
              style={{ height: "100%", objectFit: "cover" }}
            />
          </Col>
        </Row>
      </Card>
    </Col>
    <Col xs={12}>
      <Card className="shadow-sm">
        <Row className="g-0 align-items-center">
          <Col md={5}>
            <Card.Img
              src={champ3}
              style={{ height: "100%", objectFit: "cover" }}
            />
          </Col>
          <Col md={7}>
            <Card.Body>
              <Card.Title>Our dogs stand</Card.Title>
              <Card.Text>
              out not only for their excellent conformation but also for their stable temperament, obedience, and strong working abilities. We continuously strive to maintain high breed standards and достойно represent them in the show ring.s.
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Col>
  </Row>
</Container>
            </Tab.Pane>
  <Tab.Pane eventKey="Third">
 <Container className="mt-5">
  <Row className="g-4">
    <Col xs={12}>
      <Card className="shadow-sm">
        <Row className="g-0 align-items-center">
          <Col md={5}>
            <Card.Img
              src={puppy}
              style={{ height: "100%", objectFit: "cover" }}
            />
          </Col>
          <Col md={7}>
            <Card.Body>
              <Card.Title>Our Border Collie Puppies</Card.Title>
              <Card.Text>  
          Our Border Collie puppies are a perfect combination of excellent bloodlines, balanced temperament, and deep devotion to people. We carefully select our breeding pairs to ensure that every puppy inherits the very best qualities of the breed: intelligence, endurance, obedience, and energy.
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Col>
    <Col xs={12}>
      <Card className="shadow-sm">
        <Row className="g-0 align-items-center">
           <Col md={5}>
            <Card.Body>
              <Card.Title>All of our puppies</Card.Title>
              <Card.Text>
                 <ul className="custom-list list-unstyled ps-0">
      <li className="d-flex align-items-center gap-2 mt-2">
        <img src={checkIcon} alt="check" className="list-icon" width={17} height={17}/>
        <span>Receive regular veterinary check-ups</span>
      </li>
      <li className="d-flex align-items-center gap-2 mt-2">
        <img src={checkIcon} alt="check" className="list-icon" width={17} height={17} />
        <span>Are vaccinated according to their age</span>
      </li>
      <li className="d-flex align-items-center gap-2 mt-2">
        <img src={checkIcon} alt="check" className="list-icon" width={17} height={17} />
        <span>Are raised in a loving, family environment</span>
      </li>
      <li className="d-flex align-items-center gap-2 mt-2">
        <img src={checkIcon} alt="check" className="list-icon" width={17} height={17} />
        <span>Begin early socialization from the first weeks of life</span>
      </li>
    </ul>
              </Card.Text>
            </Card.Body>
          </Col>
            <Col md={7}>
            <Card.Img
              src={puppy2}
              style={{ height: "100%", objectFit: "cover" }}
            />
          </Col>
        </Row>
      </Card>
    </Col>
    <Col xs={12}>
      <Card className="shadow-sm">
        <Row className="g-0 align-items-center">
          <Col md={5}>
            <Card.Img
              src={puppy3}
              style={{ height: "100%", objectFit: "cover" }}
            />
          </Col>
          <Col md={7}>
            <Card.Body>
              <Card.Title>Socialization</Card.Title>
              <Card.Text>
                We place special attention on proper social development. Our puppies grow up surrounded by everyday household sounds, human interaction, and positive experiences, helping them become confident and well-balanced dogs.
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Col>

  </Row>
</Container>
















          
            </Tab.Pane>
              <Tab.Pane eventKey="Fourth">
          
          <p>Our Condition</p>
            </Tab.Pane>
               <Tab.Pane eventKey="Fifth">
          
          <p>Our History</p>
            </Tab.Pane>
          </Tab.Content>
           </Col>
            </Row>
          </Tab.Container>
        </Container>
    )
}
}
