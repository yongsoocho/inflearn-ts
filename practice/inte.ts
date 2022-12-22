class Car {
  constructor(private _speed: number, private _name: string) {}

  get speed(): number {
    return this._speed;
  }

  set speed(newSpeed: number) {
    this._speed = newSpeed;
  }
}

interface ICar {
  speed: number;
  name: string;
}

const car: ICar = { speed: 0, name: "" };
new Proxy(car, {});
