import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,CommonModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  profObj:any={
    userName:'akshay',
    password:'1234'
  
  }
  custObj:any={
    userName:'',
    password:''
  }
  constructor(private router: Router) {}
  onProfessionalSignIn(): void {
    // Here you would handle the authentication logic
    // If authentication is successful, navigate to the Professional Dashboard
    if(this.profObj.userName=='akshay' && this.profObj.password=='1234'){
    this.router.navigate(['/professional/prof-dashboard']);
    }
      else{
        alert('Invalid Credentials');    
      }
  }
  onCustomerSignIn(): void {
    debugger;
    if(this.custObj.userName=='vinod' && this.custObj.password=='1234'){
    this.router.navigate(['/home']);}
    else{
      alert('Invalid Credentials');    
    }
  }

}
