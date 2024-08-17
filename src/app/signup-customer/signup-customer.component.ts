import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';
import { CustomerService } from '../Services/customer.service';

@Component({
  selector: 'app-signup-customer',
  standalone: true,
  imports: [RouterLink, FormsModule, RouterModule],
  templateUrl: './signup-customer.component.html',
  styleUrl: './signup-customer.component.css',
})
export class SignupCustomerComponent {

  constructor(private customerService: CustomerService) {}
  customer: any = {
    FullName: '',
    Email: '',
    PhoneNumber: '',
    Password: '',
    ConfirmPassword: '', // Add ConfirmPassword here
  };
  formValue: any;

  onSignupCustomer() {
    if (
      !this.customer.FullName ||
      !this.customer.Email ||
      !this.customer.PhoneNumber ||
      !this.customer.Password
    ) {
      alert('Please fill in all the fields');
      return;
    }
    if (this.customer.Password !== this.customer.ConfirmPassword) {
      alert('Passwords do not match');
      return;
    }
    this.formValue = this.customer;
    this.customerService.signupCustomer(this.formValue).subscribe({
      next: (response) => {
        alert(response.message); // Use the message from the response
        console.log('Customer signed up successfully:', response);
      },
      error: (error) => {
        //  alert('Error signing up professional: ' + (error.error?.message || 'Unknown error'));
        alert(error.error?.message || 'Unknown error');
        console.error('Error signing up professional:', error);
      },
    });
  }
}
