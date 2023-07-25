import { Injectable } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/pages/auth/service/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  /**
   *
   * @param $auth
   * @param router
   */
  constructor(public $auth: AuthService, public router: Router) {}

  /**
   *
   * @returns
   */
  canActivate(): Observable<boolean> | Promise<boolean> | UrlTree | boolean {
    if (this.$auth.isAuthintificate()) {
      return true;
    }
    this.$auth.logout();
    this.router.navigate(['auth']);
    return false;
  }
}
