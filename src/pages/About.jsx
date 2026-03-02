import React from "react";
import { Col, Container, Nav, NavItem, TabContainer, TabContent, TabPane, NavLink, Row } from "react-bootstrap";


export default class About extends React.Component {
    render() {
        return(
        <Container>
          <TabContainer id="left-tabs-example" defaultActiveKey="First">
            <Row>
          <Col sm={3}>
          <Nav variant="pills" className="flex-column mt-2">
          <NavItem>
            <NavLink eventKey="First">Our Values</NavLink>
          </NavItem>
           <NavItem>
            <NavLink eventKey="Second">Our Champions</NavLink>
          </NavItem>
           <NavItem>
            <NavLink eventKey="Third">Our Puppiies</NavLink>
          </NavItem>
           <NavItem>
            <NavLink eventKey="Fourth">Our Condition</NavLink>
          </NavItem>
           <NavItem>
            <NavLink eventKey="Fifth">Our History</NavLink>
          </NavItem>
           </Nav>
          </Col>
          <Col sm={9}>
          <TabContent className="mt-3">
            <TabPane eventKey="First">
          <img src="" alt="" />
          <p></p>
            </TabPane>
              <TabPane eventKey="Second">
          <img src="" alt="" />
          <p></p>
            </TabPane>
              <TabPane eventKey="Third">
          <img src="" alt="" />
          <p></p>
            </TabPane>
              <TabPane eventKey="Fourth">
          <img src="" alt="" />
          <p></p>
            </TabPane>
              <TabPane eventKey="Fifth">
          <img src="" alt="" />
          <p></p>
            </TabPane>
          </TabContent>
           </Col>
            </Row>
          </TabContainer>
        </Container>
    )
}
}