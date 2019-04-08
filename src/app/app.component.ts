import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SUPPORTED_LANGS } from '../config/translate';
import { LanguageBusService } from './service/language-bus.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'leapest-assignment';
  constructor(public translate: TranslateService, private languageBusService: LanguageBusService) {
    translate.addLangs(SUPPORTED_LANGS);
    translate.use('en-US');
    languageBusService.emit('lang', 'en-US');
  }
  engSelected = true;
  langChange() {
    this.engSelected = !this.engSelected;
    this.engSelected ? this.changeLanguage('en-US') : this.changeLanguage('tr');
  }
  changeLanguage(lang: string) {
    this.translate.use(lang);
    this.languageBusService.emit('lang', lang);
  }
}
