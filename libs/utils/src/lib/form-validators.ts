import { FormGroup } from '@angular/forms';

export class FormValidators {

  public static comparePasswords(fb: FormGroup): void {
    const confirmPswrdCtrl = fb.get('confirmPassword');
    if (!confirmPswrdCtrl.errors || confirmPswrdCtrl.errors.passwordMismatch) {
      if (fb.get('password').value !== confirmPswrdCtrl.value) {
        confirmPswrdCtrl.setErrors({ passwordMismatch: true });
      } else {
        confirmPswrdCtrl.setErrors(null);
      }
    }
  }
}
