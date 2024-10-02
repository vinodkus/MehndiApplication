import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { RouterLink, RouterModule, Routes } from '@angular/router';
import { InternalService } from '../../Services/internal.service';



@Component({
  selector: 'app-prof-left-menu',
  standalone: true,
  imports: [RouterLink,RouterOutlet],
  templateUrl: './prof-left-menu.component.html',
  styleUrl: './prof-left-menu.component.css'
})
export class ProfLeftMenuComponent {
  sidebarVisible: boolean = false;
  /**
   *
   */
  constructor(private router: Router, private internalService:InternalService) {
    
  }
  logout(){
    // Stop any ongoing intervals or services
  this.internalService.stopInterval();
  
  // Clear localStorage/sessionStorage data related to authentication
  localStorage.removeItem('authToken'); // Remove the JWT token or any stored user details
  localStorage.removeItem('professionalDetails'); // Remove professional details
  
  // Redirect to login page after logout
  this.router.navigate(['/login']);
  }
  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }

}
