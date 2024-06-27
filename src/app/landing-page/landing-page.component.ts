import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstSectionComponent } from './first-section/first-section.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { MySkilsComponent } from './my-skils/my-skils.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactformComponent } from './contactform/contactform.component';
import { AnimationService } from '../animation.service';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, FirstSectionComponent, AboutmeComponent, MySkilsComponent, PortfolioComponent, ContactformComponent],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit{

  constructor(private animationService: AnimationService) { }

 ngOnInit(): void {
  this.animationService.applyAnimation();
 }

 ngAfterViewInit(): void {
  this.applyAnimations();
  window.addEventListener('resize', () => this.applyAnimations());
}

applyAnimations(): void {
  this.animationService.applyAnimation();
}

}

