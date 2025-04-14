import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularApp'; 

  // myForm: FormGroup;

  // constructor(
  //   private fb:FormBuilder
  // ){
  //   this.myForm = this.fb.group({
  //     name: ['', Validators.required],
  //     email: ['', Validators.required],
  //   });
  // }

  // onSubmit(){
  //   if(this.myForm.valid){
  //     alert("form submitted")
  //   }else{
  //     alert("form not submitted")
  //   }
  // }

  // ngOnInit(): void {
  //   console.log('Component has been initialized!');
  //   this.loadData();
  // }

  // loadData() {
  //   console.log('Loading some data...');
  // }


  validateForm!: FormGroup;


  constructor(private fb:FormBuilder){}
  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]]
    });
  }


  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('Form Submitted:', this.validateForm.value);
    } else {
      // Mark all fields as touched to show errors
      Object.values(this.validateForm.controls).forEach(control => {
        control.markAsDirty();
        control.updateValueAndValidity();
      });
    }
  }



  readonly tooltips = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
  value = 3;
}


