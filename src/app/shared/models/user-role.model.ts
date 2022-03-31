export class UserRole {
  private _id: bigint;
  private _role: string;

  constructor(id: bigint, roleName: string) {
    this._id = id;
    this._role = roleName;
  }

  get id(): bigint {
    return this._id;
  }

  set id(value: bigint) {
    this._id = value;
  }

  get role(): string {
    return this._role;
  }

  set role(value: string) {
    this._role = value;
  }
}
