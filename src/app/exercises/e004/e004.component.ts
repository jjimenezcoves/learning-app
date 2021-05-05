import { Component } from '@angular/core';
import { LabelPipe } from 'src/app/internationalization/label.pipe';

@Component({
  selector: 'app-e004',
  templateUrl: './e004.component.html',
  styleUrls: ['./e004.component.scss']
})
export class E004Component {

  constructor( private labelPipe: LabelPipe) { }

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
    alert(this.labelPipe.transform('there_are') + total + this.labelPipe.transform('vowels'));
  }

}
