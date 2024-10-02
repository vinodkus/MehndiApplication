import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { MehndiDesignService } from '../../Services/mehndi-design.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-prof-designs',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './prof-designs.component.html',
  styleUrl: './prof-designs.component.css',
})
export class ProfDesignsComponent {
  designs: any[] = [];
  baseUrl = '';
  isEditMode = false;
  designFormData = {
    designID: 0,
    professionalID: 0,
    designName: '',
    designImageName: '',
    designDescription: '',
    Mode: '1',
    Image: null,
  };

  constructor(
    private mehndiDesignService: MehndiDesignService,
    @Inject(PLATFORM_ID) private platformId: object
  ) {}
  ngOnInit(): void {
    this.loadDesigns();
  }
  loadDesigns(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Only run this code in the browser
      this.baseUrl = 'https://localhost:7190/uploads/MehndiDesigns/';
      const prof = localStorage.getItem('professionalDetails');
      if (prof) {
        const profId = JSON.parse(prof).professionalID;
        this.mehndiDesignService.getDesigns(profId).subscribe({
          next: (response) => {
            this.designs = response.map((design) => {
              return {
                ...design,
                imagePath: `${this.baseUrl}${design.designImageName}`,
              };
            });
            console.log('Designs loaded successfully', this.designs);
          },
          error: (error) => {
            console.error('Error loading designs', error);
          },
        });
      }
    } else {
      console.warn('localStorage is not available on the server.');
    }
  }

  onSubmitDesignForm(event: any) {
    debugger;
    event.preventDefault();
    const form = event.target;
    const prof = localStorage.getItem('professionalDetails');
    const profId = JSON.parse(prof!).professionalID;
    debugger;
    const formData = new FormData();
    formData.append('DesignID', this.designFormData.designID.toString());
    formData.append('ProfessionalID', profId);
    formData.append('DesignName', this.designFormData.designName);
    formData.append('designImageName', this.designFormData.designImageName);
    formData.append('DesignDescription', this.designFormData.designDescription);
    formData.append('Mode', this.isEditMode == false ? '1' : '2');
    if (this.designFormData.Image) {
      formData.append('ImageFile', this.designFormData.Image);
    }
    if (this.isEditMode) {
      this.mehndiDesignService.updateMehndiDesign(formData).subscribe({
        next: (response) => {
          alert(response.message); // Use the message from the response
          this.loadDesigns();
          // this.isEditMode = false;
          this.designFormData = {
            designID: 0,
            professionalID: this.designFormData.professionalID,
            designName: '',
            designImageName: '',
            designDescription: '',
            Mode: '1',
            Image: null,
          };
          console.log('Design updated successfully', response);
          this.isEditMode = false;
          // Clear the form after successful submission
          form.reset();
          // Handle success (e.g., show a success message, navigate, etc.)
        },
        error: (error) => {
          console.error('Error adding design', error);
          // Handle error (e.g., show an error message)
        },
      });
    } else {
      this.mehndiDesignService.addMehndiDesign(formData).subscribe({
        next: (response) => {
          alert(response.message); // Use the message from the response
          this.loadDesigns();
          // this.isEditMode = false;
          this.designFormData = {
            designID: 0,
            professionalID: this.designFormData.professionalID,
            designName: '',
            designImageName: '',
            designDescription: '',
            Mode: '1',
            Image: null,
          };
          console.log('Design added successfully', response);
          // Clear the form after successful submission
          form.reset();
          // Handle success (e.g., show a success message, navigate, etc.)
        },
        error: (error) => {
          console.error('Error adding design', error);
          // Handle error (e.g., show an error message)
        },
      });
    }
  }
  onEditDesign(design: any): void {
    debugger;
    this.isEditMode = true;
    this.designFormData = { ...design, Image: null }; // Populate form with selected design data
    debugger;
  }
  onFileSelected(event: any): void {
    const file = event.target.files[0];
    this.designFormData.Image = file;
  }
  onDeleteDesign(designID: number): void {
    debugger;
    if (confirm('Are you sure you want to delete this design?')) {
      this.mehndiDesignService.deleteDesign(designID).subscribe({
        next: (response) => {
          alert(response.message);
          this.loadDesigns(); // Reload designs after deletion
        },
        error: (error) => {
          console.error('Error deleting design', error);
        },
      });
    }
  }
}
