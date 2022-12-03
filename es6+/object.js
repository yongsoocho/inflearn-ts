function prt4() {
  console.log("hello world4");
}

const ob = {
  name: "yongsoo",
  age: 25,

  func1: function prt() {
    console.log("hello world");
  },

  func2: () => {
    console.log("hello world2");
  },

  func3() {
    console.log("hello world3");
  },

  prt4,
};

// ob.func1();
// ob.func2();
// ob.func3();
// ob.prt4();

const test = "test word";
// const liter = `${test} ${1 * 2 * 3}`;
// console.log(liter);

const ob2 = {
  [test]: 1,
  [1 * 2 * 3]: 6,
};
console.log(ob2);
