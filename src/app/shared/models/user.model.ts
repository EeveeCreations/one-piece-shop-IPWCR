export class User {
  private _id: number;
  private _name: string;
  private _email: string;
  private _isAdmin: boolean;
  private _token: string;
  private _endDate: Date;


  constructor(id: number, name: string, email: string, isAdmin: boolean, token: string, endDate: Date) {
    this._id = id;
    this._name = name;
    this._email = email;
    this._isAdmin = isAdmin;
    this._token = token;
    this._endDate = endDate;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
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

  get token(): string {
    return this.token;
  }

  get isAdmin(): boolean {
    return this._isAdmin;
  }

  set isAdmin(value: boolean) {
    this._isAdmin = value;
  }

  get endDate(): Date {
    return this._endDate;
  }

  set endDate(value: Date) {
    this._endDate = value;
  }
}
