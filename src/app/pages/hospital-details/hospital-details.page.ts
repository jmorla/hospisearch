import { HOSPITALS_DATASOURCE } from './../../core/hospital.model';
import { Component, OnInit } from '@angular/core';
import { Hospital } from 'src/app/core/hospital.model';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-hospital-details',
  templateUrl: './hospital-details.page.html',
  styleUrls: ['./hospital-details.page.scss'],
})
export class HospitalDetailsPage implements OnInit {

  hospital: Hospital;

  constructor(private activedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activedRoute.params.subscribe((params: Params) => {
      this.hospital = HOSPITALS_DATASOURCE.filter(h => h.id === +params.id)[0];    });
  }

}
