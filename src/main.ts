import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { provideRouter, Routes } from '@angular/router';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpLoaderFactory } from './app/app.translate-loader';

import { PrivacyPolicyComponent } from './app/privacy-policy/privacy-policy.component';
import { ImprintComponent } from './app/imprint/imprint.component';
import { LandingPageComponent } from './app/landing-page/landing-page.component';
import { AboutmeComponent } from './app/landing-page/aboutme/aboutme.component';
import { MySkilsComponent } from './app/landing-page/my-skils/my-skils.component';
import { PortfolioComponent } from './app/landing-page/portfolio/portfolio.component';
import { ContactformComponent } from './app/landing-page/contactform/contactform.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'aboutme', component: AboutmeComponent },
  { path: 'my-skils', component: MySkilsComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'contactform', component: ContactformComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'imprint', component: ImprintComponent }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(
      HttpClientModule,
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
        }
      })
    )
  ]
})
.catch(err => console.error(err));

