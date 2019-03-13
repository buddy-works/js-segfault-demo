import React from 'react';
import {render, fireEvent, cleanup } from 'react-testing-library'
import 'jest-dom/extend-expect'
import { act } from 'react-dom/test-utils';

import CalculatorResult from './CalculatorResult';

afterEach(cleanup);

const testFetchResult = jest.fn(() => 5);

const testTitle = 'Test title';

it('CalculatorResult renders with proper title', () => {
  const { getByText } = render(
    <CalculatorResult title={testTitle} />
  )

  expect(getByText(testTitle)).toBeInTheDocument();
});