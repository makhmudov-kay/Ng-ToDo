import { UntypedFormGroup } from '@angular/forms';

/**
 * 
 * @param form 
 */
export function markAsDirty(form: UntypedFormGroup) {
  Object.values(form.controls).forEach((control) => {
    if (control.invalid) {
      control.markAsDirty();
      control.updateValueAndValidity({ onlySelf: true });
    }
  });
}
