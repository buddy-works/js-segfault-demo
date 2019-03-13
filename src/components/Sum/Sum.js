import React from 'react';
import CalculatorResult from "../CalculatorResult/CalculatorResult";

const Sum = () => {
  async function fetchResult(firstNumber, secondNumber) {
    return 5;
  };

  return <CalculatorResult title="Sum" fetchResult={fetchResult} />
};

export default Sum;
