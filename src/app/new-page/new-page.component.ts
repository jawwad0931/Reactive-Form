import { Component,OnInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';


@Component({
  selector: 'app-new-page',
  standalone: true,
  imports: [CommonModule,SharedModule],
  templateUrl: './new-page.component.html',
  styleUrl: './new-page.component.css'
})
export class NewPageComponent implements OnInit { 
  // variable assign kara hai
  receivedData: any;


  constructor(private router:Router){}

  // ngOnInit():void{
  //   this.receivedData = history.state.userData;
    
  //   if (!this.receivedData) {
  //     // Redirect or show error if no data received
  //     console.log('Received Data:', this.receivedData);
  //     this.router.navigate(['/']);
  //   }
  // }

  ngOnInit(): void {
    this.receivedData = history.state.userData;
    console.log('Received Data:', this.receivedData);
  
    if (!this.receivedData) {
      this.router.navigate(['/']);
    }
  }
  
  // for back function
  goBack(): void {
    this.router.navigate(['/']); // Adjust to your preferred route
  }

}
