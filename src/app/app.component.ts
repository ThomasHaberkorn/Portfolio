import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './landing-page/navbar/navbar.component';
import { FooterComponent } from './landing-page/footer/footer.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ImprintComponent } from './imprint/imprint.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import gsap from 'gsap';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HttpClientModule,
    TranslateModule,
    NavbarComponent,
    FooterComponent,
    PrivacyPolicyComponent,
    ImprintComponent,
    ReactiveFormsModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'portfolio';

  constructor(private translateService: TranslateService, private router: Router) {

    this.translateService.setDefaultLang('en');
    this.translateService.use(localStorage.getItem('lang') || 'en');
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (this.router.url === '/imprint' || this.router.url === '/privacy-policy') {
          window.scrollTo(0, 0);  
        }
      }
    });
  }
}
