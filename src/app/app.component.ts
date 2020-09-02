import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PVP-Platform';

  constructor ( public translate: TranslateService ) {
    translate.addLangs(['en']);
    translate.setDefaultLang('en');
  }
}
