import {Component} from '@angular/core';

import {FormControl, Validators} from '@angular/forms';
import {ChangedFormErrorStateMatcher} from '../common/changed-form-error-state-matcher';


@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new ChangedFormErrorStateMatcher();

  hidePassword = true;
}
