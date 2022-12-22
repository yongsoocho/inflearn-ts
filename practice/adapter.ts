interface ICalculator {
  addAandB(a: number, b: number): number;

  minusAandB(a: number, b: number): number;
}

class CalculatorImpl {
  add(a: number, b: number): number {
    return a + b;
  }

  minus(a: number, b: number): number {
    return a - b;
  }
}

class Adapter extends CalculatorImpl implements ICalculator {
  addAandB(a: number, b: number): number {
    return this.add(a, b);
  }

  minusAandB(a: number, b: number): number {
    return this.minus(a, b);
  }
}

const cal: ICalculator = new Adapter();
console.log(cal.addAandB(1, 2));
console.log(cal.minusAandB(5, 3));
