import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit{

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


  openGithub(){
    window.open('https://github.com/ThomasHaberkorn?tab=repositories', '_blank');
  }

  openLinkedIn(){
    window.open('https://www.linkedin.com/in/thomas-haberkorn-6a6ab5295/', '_blank');
  }

  openMail(){
    const email = 'kontakt@haberkorn-thomas.de';
    navigator.clipboard.writeText(email).then(() => {
      this.showNotification('E-Mail-Adresse in den Zwischenspeicher kopiert');
    }, () => {
      this.showNotification('Fehler beim Kopieren der E-Mail-Adresse');
    });
  }

  showNotification(message: string) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerText = message;

    const container = document.getElementById('notification-container');
    if (container) {
        container.appendChild(notification);
    }

    setTimeout(() => {
        if (container) {
            container.removeChild(notification);
        }
    }, 5000);
}
}

