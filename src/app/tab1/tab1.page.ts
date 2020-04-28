import { HOSPITALS_DATASOURCE } from './../core/hospital.model';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonSearchbar } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  hospitalDatasource = HOSPITALS_DATASOURCE;
  @ViewChild('search', {static: false}) inputSearch: IonSearchbar;

  constructor() {}

  onSearchHospital(): void {
    const value = this.inputSearch.value;
    if (value && value !== '') {
      this.hospitalDatasource = this.hospitalDatasource.filter(e => e.name.includes(value));
    } else {
      this.hospitalDatasource = HOSPITALS_DATASOURCE;
    }
  }

}
