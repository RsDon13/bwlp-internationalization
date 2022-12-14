import {Component} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lehrpoolnrw';

  constructor(
    public translate: TranslateService
  ){
    // Register translation languages
    translate.addLangs(["de", "en"]);
    // Set default language
    translate.setDefaultLang("de");
  }
}

