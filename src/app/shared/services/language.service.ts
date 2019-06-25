import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage';

const StorageKeys = { language:'SelectedLanguages' }

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  selected = '';

  constructor(private translateService: TranslateService, private storage: Storage) { }

  setInitialAppLanguage() {
    let language = this.translateService.getBrowserLang();
    this.translateService.setDefaultLang(language);

    this.storage.get(StorageKeys.language).then(val => {
      if (val) {
        this.setLanguage(val);
        this.selected = val;
      }
    });
  }

  getLanguages() {
    return [
      { text: 'Português Brasil', value: 'pt', img: 'assets/imgs/br.png' },
      { text: 'Inglês', value: 'en', img: 'assets/imgs/en.png' }
    ];
  }

  setLanguage(lng) {
    this.translateService.use(lng);
    this.selected = lng;
    this.storage.set(StorageKeys.language, lng);
  }

  setTranslation(arg0: string, arg1: { 'pageTitle': string; }) {}
}
