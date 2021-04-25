import { Component } from '@angular/core';

@Component({
  selector: 'app-e004',
  templateUrl: './e004.component.html',
  styleUrls: ['./e004.component.scss']
})
export class E004Component {

  constructor() { }

  checkVowels(data:any) {
    let text:string = data.text;
    let total = 0;
    for (let i=0; i<text.length; i++){
      if(
        text.charAt(i) == 'a' ||
        text.charAt(i) == 'e' ||
        text.charAt(i) == 'i' ||
        text.charAt(i) == 'o' ||
        text.charAt(i) == 'u') {
        total++;
      }
    }
    alert("There are " + total + " vowels!");
  }

}
