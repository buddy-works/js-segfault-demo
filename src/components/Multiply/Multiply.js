import React from 'react';
import CalculatorResult from "../CalculatorResult/CalculatorResult";
import CalculatorService from '../../services/CalculatorService';

const Multiply = () => {
  async function fetchResult(firstNumber, secondNumber) {
    return await CalculatorService.multiply(firstNumber, secondNumber);
  };

  return <CalculatorResult title="Multiply" fetchResult={fetchResult} />
};

export default Multiply;
