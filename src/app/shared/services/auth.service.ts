import {Injectable} from "@angular/core";
import {User} from "../models/user.model";
import {BehaviorSubject} from "rxjs";

@Injectable()
export class AuthService{
  public url: string = "";
  user: BehaviorSubject<User>;


  constructor() {
  }

  logIn(name: any, pass: any) {
    return undefined;
  }

  signUp(email: any, pass: any) {
    return undefined;
  }
}
