import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/pages/auth/service/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private $auth: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const authToken = this.$auth.token;
    if (authToken) {
      const headers = req.headers.set('Authorization', `Token ${authToken}`);
      const authReq = req.clone({ headers });
      return next.handle(authReq);
    }
    return next.handle(req)
  }
}
