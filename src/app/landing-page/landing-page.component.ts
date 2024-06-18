import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit{

  constructor() { }

  ngOnInit(): void {  }

  openGithub(){
    window.open('https://github.com/ThomasHaberkorn?tab=repositories', '_blank');
  }

  openLinkedIn(){
    window.open('https://www.linkedin.com/in/thomas-haberkorn-6a6ab5295/', '_blank');
  }

  openMail(){}
}
