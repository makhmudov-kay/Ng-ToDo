import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse, UserLogin } from '../model/auth.interface';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  /**
   *
   */
  private url = '/api/auth/token/login/';

  /**
   */
  get token(): string {
    return localStorage.getItem('access_token') ?? '';
  }

  /**
   *
   * @param http
   */
  constructor(private http: HttpClient) {}

  /**
   *
   * @returns
   */
  isAuthintificate(): boolean {
    return !!this.token;
  }

  /**
   *
   */
  logout(): void {
    this.setToken(null);
  }

  /**
   *
   * @param user
   * @returns
   */
  login(user: UserLogin): Observable<any> {
    return this.http
      .post<LoginResponse>(this.url, user)
      .pipe(tap(this.setToken));
  }

  /**
   *
   * @param response
   */
  private setToken(response: LoginResponse | null): void {
    if (response) {
      localStorage.setItem('access_token', response.token);
      return;
    }
    localStorage.removeItem('access_token');
  }
}
