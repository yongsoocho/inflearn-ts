class UserInfo {
  public name: string; // 접근 get 설정 set 2개가 외부, 내부 자유로움
  private _age: number; // 접근 get 설정 set 2개가 자기 자신한테만 허용 + 자신을 상속한 자식한테도 혀용
  private _phone: string; // 접근 get 설정 set 2개가 자기 자신한테만 허용

  constructor(name: string, age: number, phone: string) {
    this.name = name;
    this._age = age;
    this._phone = phone;
  }

  get phone(): string {
    return (
      this._phone.slice(0, 3) +
      " - " +
      this._phone.slice(3, 7) +
      " - " +
      this._phone.slice(7, 12)
    );
  }

  // 속력, 넓이, 나이
  set phone(newPhone: string) {
    this._phone = newPhone;
  }

  get age() {
    return this._age;
  }

  set age(newAge: number) {
    if (newAge <= 0) this._age = 0;
    else this._age = newAge;
  }
}

const user = new UserInfo("용수", 25, "01011112222");
// user.phone = "il san";
user.age = -25;
console.log(user.name, user.age, user.phone);
