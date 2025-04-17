import { Component } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule ,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SharedModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  validateForm!: FormGroup;


  constructor(private fb:FormBuilder,private router: Router){}
  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]]
    });
  }


  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('Form Submitted:', this.validateForm.value);

      // this.router.navigate(['/login'], {
      //   state: { userData: formData }
      // });
    } else {
      // Mark all fields as touched to show errors
      Object.values(this.validateForm.controls).forEach(control => {
        control.markAsDirty();
        control.updateValueAndValidity();
      });
    }
  }
}
