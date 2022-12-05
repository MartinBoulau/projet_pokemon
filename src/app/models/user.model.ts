export interface UserModel {
  name: string;
}

export interface UserPlusModel extends UserModel {
  coins: number;
  deck: Array<string>;
}
