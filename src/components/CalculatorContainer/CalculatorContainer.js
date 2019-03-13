import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Sum from '../Sum/Sum';

const CalculatorContainer = () => (
  <Container>
    <Row className="justify-content-md-center mt-4">
      <Col md="auto" lg="12">
        <Sum />
      </Col>
    </Row>
  </Container>
);

export default CalculatorContainer;
