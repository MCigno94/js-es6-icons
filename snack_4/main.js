/* 
Snack 4:
Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un’età.
Crea quindi un nuovo array inserendo, per ogni persona, 
una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.
*/


//Crea un array di oggetti che rappresentano delle persone

const listPerson = [{
        nome: 'Marco',
        cognome: 'Brambilla',
        eta: 22
    },
    {
        nome: 'Giuseppina',
        cognome: 'Villa',
        eta: 12
    },
    {
        nome: 'Andrea',
        cognome: 'Colombo',
        eta: 29
    },
    {
        nome: 'Marco',
        cognome: 'Sala',
        eta: 51
    },
    {
        nome: 'Luigi',
        cognome: 'Fumagalli',
        eta: 17
    },
    {
        nome: 'Maria',
        cognome: 'Magni',
        eta: 44
    },
    {
        nome: 'Paola',
        cognome: 'Mauri',
        eta: 18
    },

]

const listAdultPerson = listPerson.map(canDrive);

function canDrive(item, i, array) {
    if (item.eta >= 18) {
        array[i]['patente B'] = 'si'
        return array[i];
    } else {
        array[i]['patente B'] = 'no';
        return array[i];
    }

}

console.log(listAdultPerson);