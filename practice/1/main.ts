import ICalculator from "./calculator";
import CalculatorImpl from "./calculator.impl";

// const cal: CalculatorImpl = new CalculatorImpl();
const cal: ICalculator = new CalculatorImpl();
console.log(cal.add(1, 2));
