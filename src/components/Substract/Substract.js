import React from 'react';
import CalculatorResult from "../CalculatorResult/CalculatorResult";
import CalculatorService from '../../services/CalculatorService';

const Substract = () => {
  async function fetchResult(firstNumber, secondNumber) {
    return await CalculatorService.substract(firstNumber, secondNumber);
  };

  return <CalculatorResult title="Substract" fetchResult={fetchResult} />
};

export default Substract;
