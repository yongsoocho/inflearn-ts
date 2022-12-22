interface ICar {
  name: string;
  speed: number;
}
const car: ICar = { speed: 0, name: "" };

const carProxy: ICar = new Proxy<ICar>(car, {
  get(target: ICar, name: keyof ICar) {
    console.log("get", target, name);
    return target[name];
  },
  set(target: ICar, name: keyof ICar, value: typeof target[typeof name]) {
    console.log("set", target, name);
    if (typeof value === "number" && name === "speed") {
      target.speed = value > 0 ? value : 0;
    }
    return true;
  },
});
console.log(carProxy.speed);
carProxy.speed = -100;
console.log(carProxy);
console.log(car);
