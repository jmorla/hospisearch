import { IonicModule } from '@ionic/angular';
import { ScheduleAppointmentComponent } from './schedule-appointment/schedule-appointment.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ScheduleAppointmentComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    ScheduleAppointmentComponent
  ],
  exports: [
    ScheduleAppointmentComponent
  ]
})
export class DialogsModule { }
