import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MehndiDesignService } from '../../Services/mehndi-design.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-prof-designs',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './prof-designs.component.html',
  styleUrl: './prof-designs.component.css'
})

export class ProfDesignsComponent {
  designs: any[] = [];
  isEditMode = false;
  designFormData = {
    designID: 0,
    professionalID: 0,
    designName: '',
    designDescription: '',
    Mode: '1',
    Image: null
  };

  constructor(private mehndiDesignService: MehndiDesignService) {}
  ngOnInit(): void {
    this.loadDesigns();
  }
  loadDesigns(): void {
    const prof = localStorage.getItem('professionalDetails');
    if (prof) {
      const profId = JSON.parse(prof).professionalID;

      this.mehndiDesignService.getDesigns(profId).subscribe({
        next: (response) => {
          const baseUrl = 'https://localhost:7190/';
         // this.designs = response;
         this.designs = response.map(design => {
          return {
            ...design,
            imagePath: `${baseUrl}${design.imagePath}`
          };
        });
          console.log('Designs loaded successfully', this.designs);
        },
        error: (error) => {
          console.error('Error loading designs', error);
        }
      });
    }
  }

  onSubmitDesignForm(event: any) {
    debugger;
    event.preventDefault();
    const form = event.target;
    const prof=localStorage.getItem('professionalDetails')
    const profId=JSON.parse(prof!).professionalID
    debugger;
    const formData = new FormData();
    formData.append('DesignID', this.designFormData.designID.toString());
    formData.append('ProfessionalID', profId);
    formData.append('DesignName', this.designFormData.designName);
    formData.append('DesignDescription',this.designFormData.designDescription);
    formData.append('Mode', this.isEditMode == false?'1':"2");
    if (this.designFormData.Image) {
      formData.append('Image', this.designFormData.Image);
    }

    this.mehndiDesignService.addMehndiDesign(formData).subscribe({
      next: (response) => {
        alert(response.message); // Use the message from the response
        this.loadDesigns();
       // this.isEditMode = false;
        this.designFormData = {
          designID: 0,
          professionalID: this.designFormData.professionalID,
          designName: '',
          designDescription: '',
          Mode: '1',
          Image: null
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
  onEditDesign(design:any): void {
    debugger;
    this.isEditMode = true;
    this.designFormData = { ...design, Image: null }; // Populate form with selected design data
    debugger;
  }
  onFileSelected(event: any): void {
    const file = event.target.files[0];
    this.designFormData.Image = file;
  }
  onDeleteDesign(designID:number):void{
    debugger;
    if (confirm('Are you sure you want to delete this design?')) {
      this.mehndiDesignService.deleteDesign(designID).subscribe({
        next: (response) => {
          alert(response.message);
          this.loadDesigns(); // Reload designs after deletion
        },
        error: (error) => {
          console.error('Error deleting design', error);
        }
      });
    }
  }
}
