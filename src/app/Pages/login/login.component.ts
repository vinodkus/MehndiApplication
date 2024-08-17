import { CustomerService } from './../../Services/customer.service';
import { InternalService } from './../../Services/internal.service';
import { Component, Inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
// import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProfessionalService } from '../../Services/professional.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  profObj:any={
    Email:'',
    Password:''
  
  }
  custObj:any={
    Email:'',
    Password:''
  
  }
  // private internalService=Inject(InternalService);
  constructor(private router: Router, private internalService:InternalService,private professionalService: ProfessionalService, private customerService: CustomerService) { }
  async onProfessionalSignIn(){
    try{
      debugger;
       this.professionalService.loginProfessional(this.profObj).subscribe({
        next:(response) =>{
          if(response.token)
          {
             // Store token in localStorage or as per your application design
             localStorage.setItem('authToken',response.token);
             this.internalService.startInterval();
             this.router.navigate(['/professional/prof-dashboard']);
          }else {
            // Handle login failure
            alert('Invalid login credentials');
          }
        }
        ,error:(error) =>{
          alert( (error.error?.message || 'Unknown error'));
          console.log(error);
        }        
       }        
       );
        

    }
    catch(error)
    {

    };
    
    // Here you would handle the authentication logic
    // If authentication is successful, navigate to the Professional Dashboard
    
  }
  
  async onCustomerSignIn(){
    try{
      debugger;
       this.customerService.loginCustomer(this.custObj).subscribe({
        next:(response) =>{
          if(response.token)
          {
             // Store token in localStorage or as per your application design
             localStorage.setItem('authToken',response.token);
             this.internalService.startInterval();
             this.router.navigate(['/home']);
          }else {
            // Handle login failure
            alert('Invalid login credentials');
          }
        }
        ,error:(error) =>{
          alert( (error.error?.message || 'Unknown error'));
          console.log(error);
        }        
       }        
       );
        

    }
    catch(error)
    {

    };
    
    // Here you would handle the authentication logic
    // If authentication is successful, navigate to the Professional Dashboard
    
  }

}
