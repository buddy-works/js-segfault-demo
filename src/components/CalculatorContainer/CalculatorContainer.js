import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Sum from '../Sum/Sum';
import Substract from '../Substract/Substract';
import Multiply from '../Multiply/Multiply';
import Divide from '../Divide/Divide';

const CalculatorContainer = () => (
  <Container>
    <Row className="justify-content-md-center mt-4">
      <Col md="auto" lg="12">
        <Sum />
        <Substract />
        <Multiply />
        <Divide />
      </Col>
    </Row>
  </Container>
);

export default CalculatorContainer;
