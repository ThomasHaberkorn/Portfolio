import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  constructor(private translate: TranslateService, private router: Router) { }
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
    this.isMenuOpen = this.isMenuOpen;
    const mobileContainer = document.getElementById('mobileContainer');
    if (mobileContainer?.classList.contains('d-none')) {
      mobileContainer.classList.remove('d-none');
    } else {
      mobileContainer?.classList.add('d-none');
    }
  }

  // scrollToSection(section: string) {
  //   const element = document.querySelector(section);
  //   if (element) {
  //     element.scrollIntoView({ behavior: 'smooth' });
  //   }
  //   this.openMenu(); 
  // }


 
  // navigateToSection(section: string) {
  //   if (section.startsWith('/')) {
  //     // Navigiere zu einer anderen Seite
  //     this.router.navigate([section]);
  //   } else {
  //     // Scrollen zu einer Sektion auf der aktuellen Seite
  //     const element = document.querySelector(section);
  //     if (element) {
  //       element.scrollIntoView({ behavior: 'smooth' });
  //     }
  //   }
  // }
}
