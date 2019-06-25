import { Component, AfterContentChecked, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { PopoverController, AlertController } from '@ionic/angular';
import { LanguagePopoverPage } from '../popover/language-popover/language-popover.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, AfterContentChecked {

  pageTitle: string;
  params = { name: 'Marcos' };

  constructor(
    private translate: TranslateService,
    private popoverCtrl: PopoverController,
    private alertCtrl: AlertController) { }

  ngOnInit() { }

  ngAfterContentChecked() {
    this.setPageTitle();
  }

  protected setPageTitle() {
    this.pageTitle = this.getPageTitle();
  }

  protected getPageTitle(): string {
    this.translate.get('Home.title', { var: 'classes' })
      .subscribe((res: string) => { this.pageTitle = res; });
    return this.pageTitle;
  }

  async showAlert() {
    const alert = await this.alertCtrl.create({
      header: this.translate.instant('Alert.header'),
      message: this.translate.instant('Alert.msg'),
      buttons: ['OK']
    });
    alert.present();
  }

  async openLanguagePopover(ev) {
    const popover = await this.popoverCtrl.create({
      component: LanguagePopoverPage,
      event: ev
    });
    await popover.present();
  }

}
