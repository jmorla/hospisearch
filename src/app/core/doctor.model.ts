export interface Doctor {
    id: number;
    fullName: string;
    specialty: string;
    photoUrl: string;
    schedule: {
        start: string,
        end: string;
    };
}


export const DOCTOR_DATASOURCE: Doctor[] = [
    {
        id: 1,
        fullName: 'Pedro Augusto Morales',
        specialty: 'Cardiolog@',
        // tslint:disable-next-line: max-line-length
        photoUrl: 'https://media.istockphoto.com/photos/portrait-of-young-male-doctor-with-stethoscope-close-up-picture-id862722044?k=6&m=862722044&s=612x612&w=0&h=Nkd8KIk_mYaK-Ed0T5LcVtsdMnk7YHcIFCjs9Ule8-g=',
        schedule: {
            start: '8AM',
            end: '4PM'
        }
    },
    {
        id: 2,
        fullName: 'Ana Garcia Perez',
        specialty: 'Pediatra',
        photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSFOxoMo2ZVzBdghXp_TYpHFXO4i0SMagu6FEHg16Sl412btgz_&usqp=CAU',
        schedule: {
            start: '8AM',
            end: '4PM'
        }
    },
    {
        id: 1,
        fullName: 'Lestie Rodriguez',
        specialty: 'Cardiolog@',
        // tslint:disable-next-line: max-line-length
        photoUrl: 'https://us.123rf.com/450wm/stockasso/stockasso1507/stockasso150700117/42512210-m%C3%A9dica-confiante-sentado-na-mesa-do-escrit%C3%B3rio-e-sorrindo-para-a-c%C3%A2mera-cuidados-de-sa%C3%BAde-e-conceito-de-preven%C3%A7%C3%A3o.jpg?ver=6',
        schedule: {
            start: '8AM',
            end: '4PM'
        }
    }
];
