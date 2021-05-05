import { Pipe, PipeTransform } from '@angular/core';
import { InternationalizationService } from './internationalization.service';
import { labels } from './labels';

@Pipe({
  name: 'label',
  pure: false
})
export class LabelPipe implements PipeTransform {

  constructor( private InternationalizationService: InternationalizationService) {}

  transform(paramLabel: string): string {

    let labelToReturn = labels.find(label => label.name == paramLabel);
    let selectedLanguage = this.InternationalizationService.getLanguage();
    let textToReturn = '';

    switch(selectedLanguage){
      case 'es':
        textToReturn = labelToReturn.es;
        break;
      case 'en':
        textToReturn = labelToReturn.en;
        break;
      default:
        textToReturn = 'LABEL_NOT_FOUND';
        break;
    }

    console.log('paramLabel: ', paramLabel, ' labelToReturn: ',labelToReturn, ' selectedLanguage: ', selectedLanguage, ' textToReturn: ', textToReturn);

    return textToReturn;
  }

}
