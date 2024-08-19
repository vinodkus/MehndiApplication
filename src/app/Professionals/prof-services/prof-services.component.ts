import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-prof-services',
  standalone: true,
  imports: [RouterLink, FormsModule, RouterModule],
  templateUrl: './prof-services.component.html',
  styleUrl: './prof-services.component.css'
})
export class ProfServicesComponent {

  serices:any={
    ServiceName:'',
    ServiceDescription:'',
    Price:0
  }
  constructor() {
    
  }
  onProfServiceSubmit() {
    console.log("Form Submitted");
  }

}
