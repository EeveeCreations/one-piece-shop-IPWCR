export class UserRole {
  private _id: number;
  private _role: string;

  constructor(id: number, roleName: string) {
    this._id = id;
    this._role = roleName;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get role(): string {
    return this._role;
  }

  set role(value: string) {
    this._role = value;
  }
}
