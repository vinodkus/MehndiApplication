import { InternalService } from './../../Services/internal.service';
import { Component, Inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProfessionalService } from '../../Services/professional.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,CommonModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  profObj:any={
    Email:'',
    password:''
  
  }
  custObj:any={
    userName:'',
    password:''
  }
  // private internalService=Inject(InternalService);
  constructor(private router: Router, private internalService:InternalService,private professionalService: ProfessionalService) { }
  async onProfessionalSignIn(){
    try{
      debugger;
       this.professionalService.loginProfessional(this.profObj).subscribe(
        (response) =>{
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
       )
        

    }
    catch(error)
    {

    };
    
    // Here you would handle the authentication logic
    // If authentication is successful, navigate to the Professional Dashboard
    
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
