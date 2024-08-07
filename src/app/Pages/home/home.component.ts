import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
profObjLst:any=[{
  name:"Ajay",
  skill:"Bridal MehndiBridal & Traditional Mehndi Expert",
  location:"123 Main Street, Anytown",
  experience:"10 years",
},
{
  name:"Vijay",
  skill:"Contemporary & Festive Mehndi Artist",
  location:"456 Elm Street, Anycity",
  experience:"8 years",
}
,
{
  name:"Ravi",
  skill:"Palm Mehndi Artist",
  location:"123 Elm Street, Anycity",
  experience:"10 years",
}
]
  constructor() {
    // console.log(this.profObj);
}
}
