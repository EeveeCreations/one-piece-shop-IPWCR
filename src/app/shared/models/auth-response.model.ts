export interface AuthResponse {
  id: number;
  name: string;
  email: string;
  isAdmin: boolean;
  token: string;
  endDate: Date;
}
