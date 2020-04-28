import { APPOINTMENTS_DATASOURCE } from './../../core/appointment.model';
import { Hospital } from './../../core/hospital.model';
import { Router } from '@angular/router';
import { DOCTOR_DATASOURCE } from './../../core/doctor.model';
import { ModalController, IonSearchbar, NavParams } from '@ionic/angular';
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Doctor } from 'src/app/core/doctor.model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-schedule-appointment',
  templateUrl: './schedule-appointment.component.html',
  styleUrls: ['./schedule-appointment.component.scss'],
})
export class ScheduleAppointmentComponent implements OnInit {

  @Input() hospital: Hospital;
  doctor: Doctor;
  doctors: Doctor[] = DOCTOR_DATASOURCE;
  date: FormControl = new FormControl('');
  time: FormControl = new FormControl('');
  @ViewChild('search', {static: false}) inputSearch: IonSearchbar;

  constructor(
    private modalController: ModalController,
    private router: Router) {}

  ngOnInit(): void {
  }

  dismiss(): void {
    this.modalController.dismiss();
  }

  onSearchDoctor() {
    const value = this.inputSearch.value;
    if (value && value !== '') {
      this.doctors = this.doctors.filter(
        e => e.fullName.includes(value) || e.specialty.includes(value));
    } else {
      this.doctors = DOCTOR_DATASOURCE;
    }
  }

  onSelectedDoctor(doctor: Doctor) {
    this.doctor = doctor;
  }

  onCreateAppointment() {
    APPOINTMENTS_DATASOURCE.push({
        hospital: this.hospital,
        doctor: this.doctor,
        date: this.date.value,
        time: this.date.value
    });
    this.dismiss();
    this.router.navigate(['/tabs', 'tab2']);
  }

}
