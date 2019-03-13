import { apiUrl } from '../config/default';

class CalculatorService {

  static async sum(firstNumber, secondNumber) {
    return get('sum', {
      a: firstNumber,
      b: secondNumber
    })
      .then(data => data.result);
  }

  static async substract(firstNumber, secondNumber) {
    return get('substract', {
      a: firstNumber,
      b: secondNumber
    })
      .then(data => data.result);
  }

  static async multiply(firstNumber, secondNumber) {
    return get('multiply', {
      a: firstNumber,
      b: secondNumber
    })
      .then(data => data.result);
  }

  static async divide(firstNumber, secondNumber) {
    return get('divide', {
      a: firstNumber,
      b: secondNumber
    })
      .then(data => data.result);
  }
}

function get(path, params = {}) {
  const url = new URL(`${apiUrl}/${path}`);
  Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
  
  return fetch(url);
}

export default CalculatorService;
