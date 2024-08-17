import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterLink } from '@angular/router';
import { ProfessionalService } from '../Services/professional.service';

@Component({
  selector: 'app-signup-professional',
  standalone: true,
  imports: [RouterLink, FormsModule, RouterModule],
  templateUrl: './signup-professional.component.html',
  styleUrl: './signup-professional.component.css',
})
export class SignupProfessionalComponent {
  professional: any = {
    FullName: '',
    Email: '',
    PhoneNumber: '',
    ExperienceYears: 0,
    Password: '',
    ConfirmPassword: '', // Add ConfirmPassword here
    // ,
    // profilePic: null
  };
  formValue: any;

  constructor(private professionalService: ProfessionalService) {}

  onSignupProfessional() {
    if (
      !this.professional.FullName ||
      !this.professional.Email ||
      !this.professional.PhoneNumber ||
      !this.professional.ExperienceYears ||
      !this.professional.Password
    ) {
      alert('Please fill in all the fields');
      return;
    }
    if (this.professional.Password !== this.professional.ConfirmPassword) {
      alert('Passwords do not match');
      return;
    }

    this.formValue = this.professional;
    this.professionalService.signupProfessional(this.formValue).subscribe({
      next: (response) => {
        alert(response.message); // Use the message from the response
        console.log('Professional signed up successfully:', response);
      },
      error: (error) => {
        //  alert('Error signing up professional: ' + (error.error?.message || 'Unknown error'));
        alert(error.error?.message || 'Unknown error');
        console.error('Error signing up professional:', error);
      },
    });
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    this.professional.profilePic = file;
  }
}
