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
  contact:"98765223345",
  about:"John is a highly skilled mehndi artist specializing in intricate bridal designs and traditional patterns. With over 10 years of experience, he has been a part of many memorable events and has a keen eye for detail."
},
{
  name:"Vijay",
  skill:"Contemporary & Festive Mehndi Artist",
  location:"456 Elm Street, Anycity",
  experience:"8 years",
  contact:"9876749460",
  about:"John is a highly skilled mehndi artist specializing in intricate bridal designs and traditional patterns. With over 10 years of experience, he has been a part of many memorable events and has a keen eye for detail."

}
,
{
  name:"Ravi",
  skill:"Palm Mehndi Artist",
  location:"123 Elm Street, Anycity",
  experience:"10 years",
  contact:"9987643210",
  about:"John is a highly skilled mehndi artist specializing in intricate bridal designs and traditional patterns. With over 10 years of experience, he has been a part of many memorable events and has a keen eye for detail."
}
]
  constructor() {
    // console.log(this.profObj);
}
}
