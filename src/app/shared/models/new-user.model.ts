import {UserRole} from "./user-role.model";

export class NewUser {
  private _id: string;
  private _name: string;
  private _email: string;
  private _passcode: string;
  private _roles: UserRole[];

  constructor(name: string, email: string, password: string, roles: UserRole[]) {
    this._id = null;
    this._name = name;
    this._email = email;
    this._passcode = password;
    this._roles = roles;
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

  get roles(): UserRole[] {
    return this._roles;
  }

  set roles(value: UserRole[]) {
    this._roles = value;
  }

  get passcode(): string {
    return this._passcode;
  }

  set passcode(value: string) {
    this._passcode = value;
  }
}
