import React, { useState } from 'react';
import { Form, Col, Button } from 'react-bootstrap';

const CalculatorResult = ({ title, fetchResult }) => {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [result, setResult] = useState(0);

  async function handleSubmit (event) {
    event.preventDefault();
    event.stopPropagation();

    try {
      const calculatedResult = await fetchResult(firstNumber, secondNumber)
      setResult(calculatedResult);
    } catch (e) {
      console.log('fetch result error: ', e);
    }
  }

  return (
    <Form onSubmit={e => handleSubmit(e)} className="mb-4">
      <h3>{title}</h3>
      <Form.Row>
        <Form.Group as={Col}>
          <Form.Label>First number</Form.Label>
          <Form.Control 
            type="number" 
            value={firstNumber} 
            onChange={e => setFirstNumber(e.target.value)}
          />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Second number</Form.Label>
          <Form.Control 
            type="number" 
            value={secondNumber}
            onChange={e => setSecondNumber(e.target.value)}
          />
        </Form.Group>
        <Form.Group as={Col} lg="2">
          <Form.Label>Result</Form.Label>
          <Form.Control 
            type="number" 
            readOnly
            value={result}
          />
        </Form.Group>
      </Form.Row>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default CalculatorResult;
