export interface UserLogin {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  user_id: number;
  username: string;
}
