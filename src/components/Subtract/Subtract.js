import React from 'react';
import CalculatorResult from "../CalculatorResult/CalculatorResult";
import CalculatorService from '../../services/CalculatorService';

const Subtract = () => {
  async function fetchResult(firstNumber, secondNumber) {
    return await CalculatorService.subtract(firstNumber, secondNumber);
  };

  return <CalculatorResult title="Subtract" fetchResult={fetchResult} />
};

export default Subtract;
