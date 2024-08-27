import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MehndiDesignService } from '../../Services/mehndi-design.service';

@Component({
  selector: 'app-prof-designs',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './prof-designs.component.html',
  styleUrl: './prof-designs.component.css'
})

export class ProfDesignsComponent {
  
  // mehndiDesign:any={
  //   designName:"",
  //   designDescription:"",
  //   profId:"",
  //   image:""
  // }
  formValue:any;
 
  constructor(private mehndiDesignService: MehndiDesignService) {}
  onFormSubmit(formValue:any)
  {
    this.formValue=formValue;
    console.log(this.formValue);    
  }
  onSubmitDesignForm(event: any) {
    debugger;
    event.preventDefault();
    const form = event.target;
    const prof=localStorage.getItem('professionalDetails')
    const profId=JSON.parse(prof!).professionalID
    debugger;
    const formData = new FormData();
    formData.append('DesignID', "0");
    formData.append('ProfessionalID', profId);
    formData.append('DesignName', form.designName.value);
    formData.append('DesignDescription', form.designDescription.value);
    formData.append('Mode', "1");
    formData.append('Image', form.designImage.files[0]);

    this.mehndiDesignService.addMehndiDesign(formData).subscribe({
      next: (response) => {
        alert(response.message); // Use the message from the response

        console.log('Design added successfully', response);
        // Handle success (e.g., show a success message, navigate, etc.)
      },
      error: (error) => {
        console.error('Error adding design', error);
        // Handle error (e.g., show an error message)
      },
    });
  }
}
