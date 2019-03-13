import React from 'react';
import {render, fireEvent, cleanup, waitForElement} from 'react-testing-library'
// this adds custom jest matchers from jest-dom
import 'jest-dom/extend-expect'
import CalculatorNavbar from './CalculatorNavbar';

afterEach(cleanup);

it('CalculatorNavbar renders with proper name', () => {
  const { getByText } = render(
    <CalculatorNavbar />
  )

  expect(getByText('Calculator')).toBeInTheDocument();
});
