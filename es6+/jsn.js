const ob = {
  name: "yongsoo",
  age: 25,
  uni: "cau",
  major: "sw",
};

//

console.log(ob?.country?.hi.hello.how.are.you);
console.log(ob.country ?? "seoul");
console.log(ob.country ? ob.country : "seoul");
