import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink, RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-prof-left-menu',
  standalone: true,
  imports: [RouterLink,RouterOutlet],
  templateUrl: './prof-left-menu.component.html',
  styleUrl: './prof-left-menu.component.css'
})
export class ProfLeftMenuComponent {

}
