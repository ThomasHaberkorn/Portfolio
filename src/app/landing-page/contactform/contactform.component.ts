import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AnimationService } from '../../animation.service';

@Component({
  selector: 'app-contactform',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule, TranslateModule, ReactiveFormsModule],
  templateUrl: './contactform.component.html',
  styleUrl: './contactform.component.scss'
})
export class ContactformComponent implements OnInit {

  
  http = inject(HttpClient);
  lang: string = '';
  german: boolean = false;
  contactData = {
    name: '',
    email: '',
    message: '',
    privacy: ""
  };
  messageSent = false;

mailTest = false;

post = {
  endPoint: 'https://haberkorn-thomas.de/sendMail.php',
  body: (payload: any) => JSON.stringify(payload),
  options: {
    headers: {
      'Content-Type': 'text/plain',
      responseType: 'text',
    },
  },
};

constructor(
  private animationService: AnimationService,
  private translate: TranslateService) {}

 

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


onSubmit(ngForm: NgForm) {
  if (ngForm.submitted && ngForm.form.valid) {
    this.http.post(this.post.endPoint, this.post.body(this.contactData))
      .subscribe({
        next: (response) => {
          this.messageSent = true;
          ngForm.resetForm();
          this.hideMessageAfterDelay();
        },
        error: (error) => {
          console.error(error);
        },
        complete: () => console.info('send post complete'),
      });
  } 
}
hideMessageAfterDelay() {
  setTimeout(() => {
    this.messageSent = false; // Hide the message after 4 seconds
  }, 4000);
}

goTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

}

