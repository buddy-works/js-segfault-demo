import { apiUrl } from '../config/default';

class CalculatorService {

  static async sum(firstNumber, secondNumber) {
    return get('sum', {
      a: firstNumber,
      b: secondNumber
    });
  }

  static async subtract(firstNumber, secondNumber) {
    return get('subtract', {
      a: firstNumber,
      b: secondNumber
    });
  }

  static async multiply(firstNumber, secondNumber) {
    return get('multiply', {
      a: firstNumber,
      b: secondNumber
    });
  }

  static async divide(firstNumber, secondNumber) {
    return get('divide', {
      a: firstNumber,
      b: secondNumber
    });
  }
}

function get(path, params = {}) {
  const url = new URL(`${apiUrl}/${path}`);
  Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
  
  return fetch(url)
    .then(data => data.json())
    .then(data => data.result);
}

export default CalculatorService;
