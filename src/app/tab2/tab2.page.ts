import { APPOINTMENTS_DATASOURCE } from './../core/appointment.model';
import { Component } from '@angular/core';
import { Appointment } from '../core/appointment.model';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  appointments: Appointment[] = APPOINTMENTS_DATASOURCE;

  constructor() {}
}
