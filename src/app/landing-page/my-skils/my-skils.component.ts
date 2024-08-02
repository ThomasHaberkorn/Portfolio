import { CommonModule } from '@angular/common';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-my-skils',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './my-skils.component.html',
  styleUrls: ['./my-skils.component.scss'] 
})
export class MySkilsComponent implements OnInit, AfterViewInit {

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
  }

  ngAfterViewInit(): void {
    const skillImages = document.querySelectorAll('.skill');

    skillImages.forEach((img, index) => {
      let fromVars: gsap.TweenVars = {};
      if (index % 3 === 0) {
        // Animieren von oben
        fromVars = { y: '-100%', opacity: 0 };
      } else if (index % 3 === 1) {
        // Animieren von unten
        fromVars = { y: '100%', opacity: 0 };
      } else {
        // Animieren von links oder rechts abwechselnd
        const direction = index % 2 === 0 ? '-100%' : '100%';
        fromVars = { x: direction, opacity: 0 };
      }

      gsap.fromTo(img, 
        fromVars,
        {
          x: '0%',
          y: '0%',
          opacity: 1,
          duration: 1,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: img,
            start: 'top 90%',
            toggleActions: 'play reverse play reverse',
            // markers: true // Entferne dies nach dem Testen
          }
        }
      );
    });

    // Animation für textContent
    gsap.fromTo('#mySkillsTextContent', 
      { x: '100%', opacity: 0 },
      {
        x: '0%',
        opacity: 1,
        duration: 1,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: '#mySkillsTextContent',
          start: 'top 90%',
          toggleActions: 'play reverse play reverse',
          // markers: true // Entferne dies nach dem Testen
        }
      }
    );

    // Animation für rightLine
    gsap.fromTo('#mySkillsRightLine', 
      { x: '100%', opacity: 0 },
      {
        x: '0%',
        opacity: 1,
        duration: 1,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: '#mySkillsRightLine',
          start: 'top 90%',
          toggleActions: 'play reverse play reverse',
          // markers: true // Entferne dies nach dem Testen
        }
      }
    );
  }

  switchLanguage(lang: any) {
    const language = lang.target.value;
    this.translate.use(language);
    localStorage.setItem('lang', language);
    this.german = language === 'de';
  }
}

