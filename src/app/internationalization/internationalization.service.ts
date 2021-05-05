import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InternationalizationService {

  activeLanguage: string;

  constructor() {
    this.activeLanguage = 'es';
   }

   getLanguage(): string {
     return this.activeLanguage;
   }

   setLanguage(language:string) {
     this.activeLanguage = language;
    //  console.log('Current language: ', this.activeLanguage);
   }

}
