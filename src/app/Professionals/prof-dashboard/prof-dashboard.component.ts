import { Component } from '@angular/core';
import { RouterLink, RouterModule, Routes } from '@angular/router';
@Component({
  selector: 'app-prof-dashboard',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './prof-dashboard.component.html',
  styleUrl: './prof-dashboard.component.css'
})
export class ProfDashboardComponent {

profFullName="";
ngOnInit() {
  const token = localStorage.getItem('authToken');
  const professionalDetails = JSON.parse(localStorage.getItem('professionalDetails') || '{}');

  console.log('Token:', token);
  console.log('Professional Details:', professionalDetails);
debugger;
var s = localStorage.getItem('professionalDetails');
debugger;
  // You can now use the professional details in your component
  this.profFullName = professionalDetails.fullName; // Example: Display the professional's name
  debugger;
}

constructor() {
 const professionalDetails = JSON.parse(localStorage.getItem('professionalDetails') || '{}');
 this.profFullName = professionalDetails.fullName;
 debugger
}
}
