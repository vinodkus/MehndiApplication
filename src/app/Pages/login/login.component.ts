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
  constructor(private router: Router) {}
  onProfessionalSignIn(): void {
    // Here you would handle the authentication logic
    // If authentication is successful, navigate to the Professional Dashboard
    
    this.router.navigate(['/professional/prof-dashboard']);
  }
  onCustomerSignIn(): void {
    this.router.navigate(['/home']);

  }

}
