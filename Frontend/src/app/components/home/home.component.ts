import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { AboutComponent } from '../about/about.component';
import { ServicesComponent } from '../services/services.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FooterComponent,
    CommonModule,
    AboutComponent,
    ServicesComponent,
    NavbarComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
