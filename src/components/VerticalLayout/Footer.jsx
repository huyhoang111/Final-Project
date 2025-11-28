// Function Name : Login Page
// Created date :  19/7/24             by :  NgVinh
// Updated date :  20/7/24             by :  NgVinh

import React from "react";
import { Container, Row, Col } from "reactstrap";

const Footer = () => {
  return (
    <React.Fragment>
      <footer
        className="footer"
      >
        <Container fluid={true}>
          <Row>
            <Col>
              <div className="d-none d-sm-block text-center">
                © {new Date().getFullYear()} Final Project
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
