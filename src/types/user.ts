export interface User {
  accessToken: string;
  username: string;
  password: string;
  joinDate: Date;
  tickets: Array<string>;
  wishList: Array<string>;
}
