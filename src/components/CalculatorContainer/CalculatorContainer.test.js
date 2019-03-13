import React from 'react';
import ReactDOM from 'react-dom';
import CalculatorContainer from './CalculatorContainer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CalculatorContainer />, div);
  ReactDOM.unmountComponentAtNode(div);
});
