import React from 'react';
import CalculatorResult from "../CalculatorResult/CalculatorResult";
import CalculatorService from '../../services/CalculatorService';

const Divide = () => {
  async function fetchResult(firstNumber, secondNumber) {
    return await CalculatorService.divide(firstNumber, secondNumber);
  };

  return <CalculatorResult title="Divide" fetchResult={fetchResult} />
};

export default Divide;
