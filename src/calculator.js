import { log } from './utils';

export default class Calculator {
  constructor() {
    this.operations = [];
    this.lastOperation = {};
  }

  @log
  add(a, b) {
    this.lastOperation = { operation: 'add', x: a, y: b };
    this.operations.push(this.lastOperation);
    if (a === 0) return b;
    if (b === 0) return a;
    return a + b;
  }

  @log
  async subtract(a, b) {
    this.lastOperation = { operation: 'subtract', x: a, y: b };
    this.operations.push(this.lastOperation);
    return Promise.resolve(a - b);
  }

  @log
  multiply(a, b) {
    this.lastOperation = { operation: 'multiply', x: a, y: b };
    this.operations.push(this.lastOperation);

    if (a === 0 || b === 0) return 0;
    return a * b;
  }

  @log
  divide(a, b) {
    this.lastOperation = { operation: 'divide', x: a, y: b };
    this.operations.push(this.lastOperation);

    if (b === 0) throw new Error('Attempt to divide by zero');
    return a / b;
  }

  @log
  square(a) {
    this.operations.push({ operation: 'square', x: a });
    return a * a;
  }

  @log
  squareRoot(a) {
    this.operations.push({ operation: 'squareRoot', x: a });
    return Math.sqrt(a);
  }

  @log
  pow(a, b) {
    this.operations.push({ operation: 'pow', x: a, y: b });
    return Math.pow(a, b);
  }

  @log
  min(a, b) {
    this.operations.push({ operation: 'min', x: a, y: b });
    throw new Error('Not implemented');
  }
}

