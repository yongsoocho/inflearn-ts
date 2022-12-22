import { ICalculator } from "./cal";
import { CalculatorImplV1 } from "./calImpl.v1";
import { CalculatorImplV2 } from "./calImpl.v2";
import { CalculatorImplV3 } from "./calImpl.v3";

const cal: ICalculator = new CalculatorImplV3();
console.log(cal.add(1, 2));
console.log(cal.minus(7, 2));
console.log(cal.multiple(3, 3));
