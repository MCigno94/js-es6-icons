/* Descrizione:
Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
Infine stampa separatamente i 3 array. */


//Crea un array composto da 10 automobili

const listCars = [{
        marca: 'Fiat',
        modello: 'Panda',
        alimentazione: 'GPL'
    },
    {
        marca: 'Audi',
        modello: 'Audi A3',
        alimentazione: 'Diesel'
    },
    {
        marca: 'Fiat',
        modello: 'Punto',
        alimentazione: 'Metano'
    },
    {
        marca: 'Fiat',
        modello: 'Tipo',
        alimentazione: 'Benzina'
    },
    {
        marca: 'BMW',
        modello: 'BMW Serie 1',
        alimentazione: 'Diesel'
    },
    {
        marca: 'Citroën',
        modello: 'Citroën C1',
        alimentazione: 'GPL'
    },
    {
        marca: 'Cupra',
        modello: 'CUPRA Leon',
        alimentazione: 'Elettrica'
    },
    {
        marca: 'Fiat',
        modello: 'Fiat 500',
        alimentazione: 'Elettrica'
    },
    {
        marca: 'Dacia',
        modello: 'Dacia duster',
        alimentazione: 'Diesel'
    },
    {
        marca: 'Ford',
        modello: 'Ford Fiesta',
        alimentazione: 'Benzina'
    }
];

const carsBenzine = listCars.filter(car => car.alimentazione === 'Benzina');
console.log(carsBenzine);

const carsDiesel = listCars.filter(car => car.alimentazione === 'Diesel');
console.log(carsDiesel);

const remainingCars = listCars.filter(car => car.alimentazione !== 'Benzina' && car.alimentazione !== 'Diesel');
console.log(remainingCars);