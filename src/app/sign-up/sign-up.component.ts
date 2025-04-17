import { Component } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule,FormBuilder, FormGroup, Validators } from '@angular/forms';
// router import karna hai temperary data show karana hai
// agar mujhe kisi bhi page mai routing ka kaam karna hai tou mujhe router aur router module ko import karna hoga
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [SharedModule,ReactiveFormsModule,RouterModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  isSubmitting: boolean = false;
  validateForm!:FormGroup;

  constructor(private fb:FormBuilder,private router: Router){}

  ngOnInit():void{
    this.validateForm =  this.fb.group({
      first_name: [null, [Validators.required, Validators.minLength(3)]],
      last_name: [null, [Validators.required, Validators.minLength(3)]],
      email: [null, [Validators.required, Validators.email]],
      contact: ['', [Validators.required, Validators.pattern(/^[0-9]{11}$/)]],
      street: [null, [Validators.required,Validators.minLength(3),Validators.maxLength(255),Validators.pattern(/^[a-zA-Z0-9\s,.'-]{3,}$/)]],
      city: [null, [Validators.required]],
      state: [null, [Validators.required]],
      country: [null, [Validators.required]],
      // agree: this.fb.control(false)
    });

    // code for saved data temperaray in browser whenever i saved 
    //  Restore saved data if available
    const savedForm = localStorage.getItem('signUpForm');
    if (savedForm) {
      this.validateForm.patchValue(JSON.parse(savedForm));
    }

    //  Save form changes to localStorage
    this.validateForm.valueChanges.subscribe(value => {
      localStorage.setItem('signUpForm', JSON.stringify(value));
    });
  }

  submitForm():void{
    if(this.validateForm.valid){
      // for loading spinner button
      this.isSubmitting = true;  // Show the loading spinner
      // ✅ Submit logic
      setTimeout(() => {
        this.isSubmitting = false;

        const formData = this.validateForm.value;

        // Navigate first before resetting the form
        // this.router.navigate(['/new-page'], {
        // this.router.navigate(['/new-page'], {
        this.router.navigate(['/login'], {
          state: { userData: formData }
        });


        // reset ko hamesha neechay rakhna iski waja se issue aata rehta hai
        // Now reset after navigation
        this.validateForm.reset();
      }, 2000);
      console.log('Form Submitted:', this.validateForm.value);
    }else{
      // Mark all fields as touched to show errors
      Object.values(this.validateForm.controls).forEach(control => {
        control.markAsDirty();
      });
      console.log('Form Submitted:', this.validateForm.value);
      // After the form is successfully submitted, redirect to the new page
      
    }
  }






  // for numbers input field
  onlyNumberKey(event: KeyboardEvent): boolean {
    const charCode = event.which ? event.which : event.keyCode;
  
    // Allow only digits
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
      return false;
    }
  
    const input = event.target as HTMLInputElement;
    if (input.value.length >= 12) {
      event.preventDefault();
      return false;
    }
  
    return true;
  }
  
  
}
