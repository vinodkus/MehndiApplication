import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MehndiServiceService } from '../../Services/mehndi-service.service';
import { CommonModule } from '@angular/common';
// import { MehndiServiceService } from '../../services/mehndi-service.service';

@Component({
  selector: 'app-prof-services',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './prof-services.component.html',
  styleUrl: './prof-services.component.css'
})
export class ProfServicesComponent {
  services: any[] = [];
  isEditMode = false;
  serviceFormData = {
    serviceID: 0,
    professionalID: 0,
    serviceName: '',
    serviceDescription: '',
    price: 0
  };

  constructor(private mehndiServiceService: MehndiServiceService) {}

  ngOnInit(): void {
    this.loadServices();
  }

  loadServices(): void {
    debugger;
    const prof = localStorage.getItem('professionalDetails');
    if (prof) {
      const profId = JSON.parse(prof).professionalID;

      this.mehndiServiceService.getServices(profId).subscribe({
        next: (response) => {
          this.services = response;
          console.log('Services loaded successfully', this.services);
        },
        error: (error) => {
          console.error('Error loading services', error);
        }
      });
    }
  }

  onProfServiceSubmit() {
    debugger;
    const prof=localStorage.getItem('professionalDetails')
    const profId=JSON.parse(prof!).professionalID
    const formData = {
      ServiceID: this.serviceFormData.serviceID,
      ProfessionalID:profId,// localStorage.getItem('professionalID'),
      ServiceName: this.serviceFormData.serviceName,
      ServiceDescription: this.serviceFormData.serviceDescription,
      Price: this.serviceFormData.price
    };
debugger;
    if (this.isEditMode) {
      this.mehndiServiceService.updateService(formData).subscribe({
        next: (response) => {
          alert(response.message);
          this.loadServices();
          this.resetForm();
        },
        error: (error) => {
          console.error('Error updating service', error);
        }
      });
    } else {
      this.mehndiServiceService.addService(formData).subscribe({
        next: (response) => {
          alert(response.message);
          this.loadServices();
          this.resetForm();
        },
        error: (error) => {
          console.error('Error adding service', error);
        }
      });
    }
  }

  onEditService(service: any): void {
    this.isEditMode = true;
    this.serviceFormData = { ...service };
  }

  onDeleteService(serviceID: number): void {
    if (confirm('Are you sure you want to delete this service?')) {
      this.mehndiServiceService.deleteService(serviceID).subscribe({
        next: (response) => {
          alert(response.message);
          this.loadServices();
        },
        error: (error) => {
          console.error('Error deleting service', error);
        }
      });
    }
  }

  resetForm() {
    this.serviceFormData = {
      serviceID: 0,
      professionalID: 0,
      serviceName: '',
      serviceDescription: '',
      price: 0
    };
    this.isEditMode = false;
  }
}
