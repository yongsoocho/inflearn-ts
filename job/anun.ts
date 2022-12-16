// any unknown
const user: any = {
  ID: "yongsoo",
};
console.log(user.name);
console.log(user.length);

const newUser: unknown = {
  ID: "yongsoo",
};
console.log(newUser.ID);
console.log(newUser.name);
console.log(newUser.length);
