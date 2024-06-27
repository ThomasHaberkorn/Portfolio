import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AnimationService } from '../../animation.service';

@Component({
  selector: 'app-aboutme',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './aboutme.component.html',
  styleUrl: './aboutme.component.scss'
})
export class AboutmeComponent implements OnInit{
  lang: string = '';
  german: boolean = false;
  
  constructor(
    private animationService: AnimationService,
    private translate: TranslateService
    
  ) { }
 

  ngOnInit(): void { 
    this.animationService.applyAnimation();
    this.lang = localStorage.getItem('lang') || 'en';
    this.german = this.lang === 'de';
    this.translate.use(this.lang);
    this.translate.onLangChange.subscribe((event) => {
      this.lang = event.lang;
      this.german = this.lang === 'de';
    }); 
   }

   ngAfterViewInit(): void {
    this.applyAnimations();
    window.addEventListener('resize', () => this.applyAnimations());
  }

  applyAnimations(): void {
    this.animationService.applyAnimation();
  }

   switchLanguage(lang: any) {
    const language = lang.target.value;
    this.translate.use(language);
    localStorage.setItem('lang', language);
    this.german = language === 'de';
  }
 
}
