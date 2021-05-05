import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { InternationalizationService } from '../internationalization/internationalization.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit {

  constructor( public internationalizationService: InternationalizationService ) { }

  ngOnInit(): void {
  }

  setLanguage(language: string) {
    this.internationalizationService.setLanguage(language);
  }

}
