import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, TranslateModule],
    templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  constructor(private translate: TranslateService) { }
  isMenuOpen = false;
  lang: string = '';

  ngOnInit(): void {
    this.closeMobileMenu();
    this.lang = localStorage.getItem('lang') || 'de';
    this.translate.use(this.lang);
  }


  switchLanguage(language: string) {
    this.translate.use(language);
    localStorage.setItem('lang', language);
  }

  isEnglish(): boolean {
    return this.translate.currentLang === 'en';
  }

   closeMobileMenu() {
    const mobileContainer = document.getElementById('mobileContainer');
    if (mobileContainer) {
      mobileContainer.classList.add('d-none');
    }
  }
  openMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    const mobileContainer = document.getElementById('mobileContainer');
    if (mobileContainer?.classList.contains('d-none') ) {
      mobileContainer.classList.remove('d-none');
    } else {
      mobileContainer?.classList.add('d-none');
    }
  }

}

