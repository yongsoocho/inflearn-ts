interface IUser {
  name: string;
  age: number;
}

interface IBook2 {
  title: string;
  price: number;
}

interface ICart {
  userName: string;
  bookName: string;
}

interface IUserCartService {
  user: IUser;

  book: IBook2;

  cart: ICart;
}

function login(params: IUserCartService["user"]) {
  // 유저가 .. 로그인?
  console.log(params);
}
login({ name: "yongsoo", age: 25 });

function searchBook(params: IUserCartService["book"]) {
  // 책을 검색하는 로직
  console.log(params);
}
searchBook({ title: "yongsoo TS", price: 29700 });

function addBookToMyCart(params: IUserCartService["cart"]) {
  // 책을 검색하는 로직
  console.log(params);
}
addBookToMyCart({ userName: "yongsoo", bookName: "yongsoo TS" });
