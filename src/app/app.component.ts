import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavbarComponent } from './landing-page/navbar/navbar.component';
import { AboutmeComponent } from './landing-page/aboutme/aboutme.component';
import { MySkilsComponent } from './landing-page/my-skils/my-skils.component';
import { PortfolioComponent } from './landing-page/portfolio/portfolio.component';
import { ContactformComponent } from './landing-page/contactform/contactform.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LandingPageComponent, NavbarComponent, AboutmeComponent, MySkilsComponent, PortfolioComponent, ContactformComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}