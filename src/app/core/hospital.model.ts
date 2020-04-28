export interface Hospital {
    id: number;
    name: string;
    schedule: string;
    photoUrl: string;
    address: string;
    open: boolean;
    services: any[];
}

export const HOSPITALS_DATASOURCE: Hospital[] = [
    {
        id: 1,
        name: 'Hospital Dario Contreras',
        schedule: 'Abierto las 24 horas',
        photoUrl: 'https://assets.metrolatam.com/do/2016/12/02/P620Dario20Contreras-1600x800.jpg',
        address: ' Calle Club Rotario, Santo Domingo Este 11503',
        open: true,
        services: [
            'Atencion de emergencias',
            'Cardiologia',
            'Pediatria'
        ]
    },
    {
        id: 2,
        name: 'Hospital Traumatologico Dr. Ney Arias',
        schedule: 'Abierto * Horacio de cierre: 20:00',
        photoUrl: 'https://i.ytimg.com/vi/za31fUCPtOM/maxresdefault.jpg',
        address: ' Avenida Charles de Gaulle, Santo Domingo',
        open: true,
        services: [
            'Atencion de emergencias',
            'Cardiologia',
            'Pediatria'
        ]
    },
    {
        id: 3,
        name: 'Hospital Pediátrico Dr. Hugo Mendoza',
        schedule: 'Cerrado * Horacio de cierre: 16:00',
        photoUrl: 'https://i.ytimg.com/vi/MRKx2s6U66Q/maxresdefault.jpg',
        address: ' Av. Konrad Adenauer Norte, Rep. Dom., Avenida Charles de Gaulle, Santo Domingo',
        open: false,
        services: [
            'Atencion de emergencias',
            'Cardiologia',
            'Pediatria'
        ]
    },
    {
        id: 4,
        name: 'Hospital De la Mujer Dominicana',
        schedule: '	Abierto las 24 horas',
        photoUrl: 'https://acento.com.do/wp-content/uploads/i0000xxlrccphg8ijpg.jpg',
        address: ' Av Simón Bolívar, Santo Domingo',
        open: true,
        services: [
            'Atencion de emergencias',
            'Cardiologia',
            'Pediatria'
        ]
    }
];
