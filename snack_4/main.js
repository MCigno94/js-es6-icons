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


/* Creo un nuovo array inserendo, per ogni persona, 
una frase con il nome e cognome e l’indicazione se può guidare, 
in base all’età.*/

const listAdultPerson = listPerson.map(canDrive);

/**
 * @param {string} item seleziona un elemento dell'array
 * @param {number} i indica la posizione degli oggetti
 * @param {array} array nuovo array creato
 * @returns array con una nuova proprietà in più
 */
function canDrive(item, i, array) {
    if (item.eta >= 18) {
        array[i]['patente B'] = 'si'
            //dichiaro se person può guidare
        console.log(`${item.nome} ${item.cognome} ha ${item.eta} anni e può guidare`);
        return array[i];
    } else {
        array[i]['patente B'] = 'no';
        //dichiaro se person non può guidare
        console.log(`${item.nome} ${item.cognome} ha ${item.eta} anni e non può guidare`);
        return array[i];
    }

}

//stampo il nuovo array
console.log(listAdultPerson);