import { Component } from '@angular/core';

@Component({
  selector: 'app-prof-profile',
  standalone: true,
  imports: [],
  templateUrl: './prof-profile.component.html',
  styleUrl: './prof-profile.component.css'
})
export class ProfProfileComponent {
  /**
   *
   */
profFullName="";

  constructor() {
    const professionalDetails = JSON.parse(localStorage.getItem('professionalDetails') || '{}');
    this.profFullName = professionalDetails.fullName;
    
  }
  onPersonalInfoSubmit(){
    // console.log("Personal Info Submitted");
  }

}
