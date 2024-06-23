import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-my-skils',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './my-skils.component.html',
  styleUrls: ['./my-skils.component.scss'] 
})
export class MySkilsComponent implements OnInit{

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

   switchLanguage(lang: any) {
    const language = lang.target.value;
    this.translate.use(language);
    localStorage.setItem('lang', language);
    this.german = language === 'de';
  }
}
