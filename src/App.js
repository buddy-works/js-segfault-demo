import React from 'react';
import CalculatorContainer from './components/CalculatorContainer/CalculatorContainer';
import CalculatorNavbar from './components/CalculatorNavbar/CalculatorNavbar';

import 'bootstrap/dist/css/bootstrap.css';

const App = () => (
  <>
    <CalculatorNavbar />
    <CalculatorContainer />
  </>
);

export default App;
