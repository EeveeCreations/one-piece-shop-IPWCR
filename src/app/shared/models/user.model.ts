export class User {
  private _id: bigint;
  private _name: string;
  private _email: string;
  private _passcode: string;
  private _isAdmin: boolean;


  constructor(id: bigint, name: string,email: string, passcode: string, isAdmin: boolean) {
    this._id = id;
    this._name = name;
    this._email = email
    this._passcode = passcode;
    this._isAdmin = isAdmin;
  }


  get id(): bigint {
    return this._id;
  }

  set id(value: bigint) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get passcode(): string {
    return this._passcode;
  }

  set passcode(value: string) {
    this._passcode = value;
  }

  get isAdmin(): boolean {
    return this._isAdmin;
  }

  set isAdmin(value: boolean) {
    this._isAdmin = value;
  }
}
