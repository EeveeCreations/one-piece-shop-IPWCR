import {UserRole} from "./user-role.model";

export interface AuthResponse {
  id: number;
  name: string;
  email: string;
  roles: UserRole[];
  token: string;
  refreshToken:string;
}
