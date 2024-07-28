export class User {
  readonly id: string;
  readonly name: string;
  readonly avatar: string;

  constructor(id: string, name: string, avatar: string) {
    this.id = id;
    this.name = name;
    this.avatar = avatar;
  }
}
