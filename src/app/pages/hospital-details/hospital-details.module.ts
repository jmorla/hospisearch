import { DialogsModule } from './../../dialogs/dialogs.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HospitalDetailsPageRoutingModule } from './hospital-details-routing.module';

import { HospitalDetailsPage } from './hospital-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HospitalDetailsPageRoutingModule,
    DialogsModule
  ],
  declarations: [HospitalDetailsPage]
})
export class HospitalDetailsPageModule {}
