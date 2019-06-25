import { Component, AfterContentChecked } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterContentChecked {
  
  pageTitle: string;

  constructor(private translate: TranslateService) {}

  ngAfterContentChecked() {
    this.setPageTitle();
  }

  protected setPageTitle() {
      this.pageTitle = this.getPageTitle();
  }

  protected getPageTitle(): string {
    this.translate.get('Home.Title', { var: 'classes' })
    .subscribe((res: string) => { this.pageTitle = res; });
    return this.pageTitle;
    console.log(this.pageTitle)
  }

}
