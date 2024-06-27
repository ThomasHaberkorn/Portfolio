import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
// import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavbarComponent } from './landing-page/navbar/navbar.component';
// import { AboutmeComponent } from './landing-page/aboutme/aboutme.component';
// import { MySkilsComponent } from './landing-page/my-skils/my-skils.component';
// import { PortfolioComponent } from './landing-page/portfolio/portfolio.component';
// import { ContactformComponent } from './landing-page/contactform/contactform.component';
import { FooterComponent } from './landing-page/footer/footer.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ImprintComponent } from './imprint/imprint.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HttpClientModule,
    TranslateModule,
    // LandingPageComponent,
    NavbarComponent,
    // AboutmeComponent,
    // MySkilsComponent,
    // PortfolioComponent,
    // ContactformComponent,
    FooterComponent,
    PrivacyPolicyComponent,
    ImprintComponent,
    ReactiveFormsModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';

  constructor(private translateService: TranslateService) {
    this.translateService.setDefaultLang('en');
    this.translateService.use(localStorage.getItem('lang') || 'en');
  }
}
