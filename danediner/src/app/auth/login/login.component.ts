import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }






    // --------------------- FORMS: TEMPLATE-DRIVEN APPROACH ---------------- //

  @ViewChild('f') loginInForm: NgForm;  // Another way to access the template-driven form via form variable 'f'

  first = 'enter first text';
  second = 'enter second text';
  third = 2;

onSubmit(form: NgForm) {  // NgForm & HTMLFontElement provides the same form data

   console.log(form.value);
}

onSubmitV() {

 this.loginInForm = this.loginInForm; //  Access contents of form using viewChild injection and NgForm varaible
 console.log(this.loginInForm);
}

setFieldsViewChild() {

  const first1 = 'first One';
  this.loginInForm.setValue({ // Set form fields, all fields must be declare and initialized
    userData: { // UserData because first and second field is located inside a form group

      first: first1,
      second: 'am second'
    }, third: 1  // third field is located outside of formGroup 'userData'
  });

}

patchFieldViewChild() {

    this.loginInForm.form.patchValue({ // Patch a form field
    userData: { // UserData because first and second field is located inside a form group
      second: 'am second Second '
    }, third: 3  // third field is located outside of formGroup 'userData'
  });
}

// ---------------------------- End Template-Driven Form ------------------------------- //





 ngOnInit() {}
}
