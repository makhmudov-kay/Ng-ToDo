import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from './service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent implements OnInit {
  /**
   *
   */
  form!: UntypedFormGroup;

  /**
   *
   */
  isLoading = false;

  /**
   *
   * @param fb
   * @param $auth
   */
  constructor(
    private fb: UntypedFormBuilder,
    private $auth: AuthService,
    private router: Router,
    private cd: ChangeDetectorRef
  ) {}

  /**
   *
   */
  private initForm() {
    this.form = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
    });
  }

  /**
   *
   * @returns
   */
  private markAsDirty() {
    Object.values(this.form.controls).forEach((control) => {
      if (control.invalid) {
        control.markAsDirty();
        control.updateValueAndValidity({ onlySelf: true });
      }
    });
    return;
  }

  /**
   *
   */
  private stopLoadingBtn() {
    this.isLoading = false;
    this.cd.markForCheck();
  }

  /**
   *
   */
  ngOnInit() {
    this.initForm();
  }

  /**
   *
   * @returns
   */
  submitForm() {
    if (this.form.invalid) {
      return this.markAsDirty();
    }

    const request = this.form.getRawValue();
    this.isLoading = true;

    this.$auth.login(request).subscribe({
      next: () => {
        this.form.reset();
        this.router.navigate(['../']);
        this.stopLoadingBtn();
      },
      error: () => {
        this.stopLoadingBtn();
      },
    });
  }
}
