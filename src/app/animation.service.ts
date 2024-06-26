
// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root',
// })
// export class AnimationService {
//   constructor() {}

//   public applyAnimation(): void {
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('show');
//         } else {
//           entry.target.classList.remove('show');
//         }
//       });
//     });

//     const hiddenElements = document.querySelectorAll('.hidden, .hiddenRight');
//     hiddenElements.forEach((el) => observer.observe(el));
//   }
 
// }

// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root',
// })
// export class AnimationService {
//   private observer: IntersectionObserver;

//   constructor() {
//     this.observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('show');
//         } else {
//           entry.target.classList.remove('show');
//         }
//       });
//     });
//   }

//   public applyAnimation(): void {
//     this.observer.disconnect(); // Entfernen Sie alte Beobachtungen
//     const hiddenElements = document.querySelectorAll('.hidden, .hiddenRight');
//     hiddenElements.forEach((el) => this.observer.observe(el));
//   }
// }
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AnimationService {
  private observer: IntersectionObserver;

  constructor() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains('hiddenUpDown')) {
            entry.target.classList.add('showUpDown');
          } else {
            entry.target.classList.add('show');
          }
        } else {
          if (entry.target.classList.contains('hiddenUpDown')) {
            entry.target.classList.remove('showUpDown');
          } else {
            entry.target.classList.remove('show');
          }
        }
      });
    });
  }

  public applyAnimation(): void {
    this.observer.disconnect(); // Entfernen Sie alte Beobachtungen
    const hiddenElements = document.querySelectorAll('.hidden, .hiddenRight, .hiddenUpDown');
    hiddenElements.forEach((el) => this.observer.observe(el));
  }
}
