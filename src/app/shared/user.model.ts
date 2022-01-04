export class User{
   private _id : bigint;
   private _name: string;
   private _passcode: string;
   private _isAdmin: boolean;


  constructor(id: bigint, name: string, passcode: string, isAdmin: boolean) {
    this._id = id;
    this._name = name;
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
