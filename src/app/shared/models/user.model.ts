import {UserRole} from "./user-role.model";

export class User {
  private _id: number;
  private _name: string;
  private _email: string;
  private _roles: UserRole[];
  private _token: string;
  private _refreshToken: string;

  constructor(id: number, name: string, email: string, roles: UserRole[], token: string, refreshToken: string) {
    this._id = id;
    this._name = name;
    this._email = email;
    this._roles = roles;
    this._token = token;
    this._refreshToken = refreshToken;
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
    return this._token;
  }

  get refreshToken(): string {
    return this._refreshToken;
  }

  set refreshToken(value: string) {
    this._refreshToken = value;
  }

  get roles(): UserRole[] {
    return this._roles;
  }

  set roles(value: UserRole[]) {
    this._roles = value;
  }
}
