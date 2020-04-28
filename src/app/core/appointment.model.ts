import { Doctor } from 'src/app/core/doctor.model';
import { Hospital } from './hospital.model';
export interface Appointment {
    hospital: Hospital;
    doctor: Doctor;
    date: any;
    time: any;
}

export const APPOINTMENTS_DATASOURCE: Appointment[] = [];
