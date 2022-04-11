/* 
Snack 2:
A partire da un array di stringhe, 
crea un secondo array formattando le stringhe del primo array in minuscolo 
e con l’iniziale maiuscola.
Es: ['grogu', 'MANDO', 'Luke'] =>  ['Grogu', 'Mando', 'Luke']
 */

const firstName = ['MARIO', 'luiGI', 'Franco', 'clauDIAno', 'ROCCO'];

firstName.forEach(upperCaseFunction);

function upperCaseFunction(element, i, array) {
    const newFirstName = array[i].charAt(0).toUpperCase() + array[i].slice(1).toLowerCase();
    console.log(newFirstName);
}