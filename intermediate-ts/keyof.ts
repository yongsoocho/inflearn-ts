interface IBook {
  title: string;
  publisher: string;
  price: number;
  author: string;
}

function prt(params: IBook, key: keyof IBook) {
  console.log(params[key]);
}

prt(
  {
    title: "TS 배우기",
    publisher: "인프런",
    price: 29700,
    author: "조용수",
  },
  "author"
);
