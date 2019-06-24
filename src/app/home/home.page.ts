import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  PageTitle: string;

  constructor(private translate: TranslateService) {}

  protected getPageTitle(): string {
    this.translate.get('GroupingForm.TextEditGroup', { var: 'classes' })
    .subscribe((res: string) => { this.PageTitle = res; });
    return this.PageTitle;
  }

}
