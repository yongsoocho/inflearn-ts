interface HaHa {
  haha: string;
}
interface IUser {
  user: string;
}
type haha = IUser extends HaHa ? string : number;
const test: haha = 1;
