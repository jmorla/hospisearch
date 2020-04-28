import { ScheduleAppointmentComponent } from './../../dialogs/schedule-appointment/schedule-appointment.component';
import { HOSPITALS_DATASOURCE } from './../../core/hospital.model';
import { Component, OnInit } from '@angular/core';
import { Hospital } from 'src/app/core/hospital.model';
import { ActivatedRoute, Params } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-hospital-details',
  templateUrl: './hospital-details.page.html',
  styleUrls: ['./hospital-details.page.scss'],
})
export class HospitalDetailsPage implements OnInit {

  hospital: Hospital;

  constructor(
    private activedRoute: ActivatedRoute,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    this.activedRoute.params.subscribe((params: Params) => {
      this.hospital = HOSPITALS_DATASOURCE.filter(h => h.id === +params.id)[0]; });
  }

  async onScheduleAppointment() {
    const modal = await this.modalController.create({
      component: ScheduleAppointmentComponent,
      componentProps: {
        hospital: this.hospital
      }
    });
    return await modal.present();
  }

}
