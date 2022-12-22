interface ICalculator {
  // add(a: number, b: number): number;
  addAandB(a: number, b: number): number;

  // minus(a: number, b: number): number;
  minusAandB(a: number, b: number): number;
}

class CalculatorImpl implements ICalculator {
  add(a: number, b: number): number {
    return a + b;
  }

  minus(a: number, b: number): number {
    return a - b;
  }
}
// 상속
class CalculatorImplAdapter extends CalculatorImpl implements ICalculator {
  addAandB(a: number, b: number): number {
    return this.add(a, b);
  }

  minusAandB(a: number, b: number): number {
    return this.minus(a, b);
  }
}

const cal: ICalculator = new CalculatorImpl();
