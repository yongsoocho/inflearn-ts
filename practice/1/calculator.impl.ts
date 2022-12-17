import ICalculator from "./calculator";

export default class CalculatorImpl implements ICalculator {
  add(a: number, b: number): number {
    return a + b;
  }

  minus(a: number, b: number): number {
    return a - b;
  }

  pow(a: number, n: number): number {
    return a ** 2;
  }
}
