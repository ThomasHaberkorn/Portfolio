import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent implements OnInit {
  lang: string = '';
  german: boolean = false;
  
  constructor(private translate: TranslateService) { }
 

  ngOnInit(): void { 
    this.lang = localStorage.getItem('lang') || 'en';
    this.german = this.lang === 'de';
    this.translate.use(this.lang);
    this.translate.onLangChange.subscribe((event) => {
      this.lang = event.lang;
      this.german = this.lang === 'de';
    }); 

    gsap.from('.joinContent', {
      scale: 0,
      duration: 1,
      scrollTrigger: {
        trigger: '.joinContent',
        start: 'top 90%', // Startpunkt der Animation
        toggleActions: 'play reverse play reverse',
       
      }
    });

    // Animation für elPollo
    gsap.from('.elPollo', {
      scale: 0,
      duration: 1,
      scrollTrigger: {
        trigger: '.elPollo',
        start: 'top 90%', // Startpunkt der Animation
        toggleActions: 'play reverse play reverse',
        // markers: true // Entferne dies nach dem Testen
      }
    });

  }

   switchLanguage(lang: any) {
    const language = lang.target.value;
    this.translate.use(language);
    localStorage.setItem('lang', language);
    this.german = language === 'de';
  }

  elPollo(){
    window.open('https://elpollo.haberkorn-thomas.de/', '_blank');
  }

  elPolloGit(){
    window.open('https://github.com/ThomasHaberkorn/El-pollo-loco', '_blank');
  }

  join(){
    window.open('https://join.haberkorn-thomas.de/', '_blank');
  }
  
  joinGit(){
    window.open('https://github.com/ThomasHaberkorn/Join', '_blank');
  }
}
