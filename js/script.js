var listaBombe = [];

// creo una funzione che, dato un certo array ed elemento, ritorna true se l'elemento è presente nell'array, altrimenti ritorna false//

function inArray(array, elemento) {
  var trovato = false;

  for (i= 0; i < array.length ; i++) {
    if(array[i] == elemento) {
      trovato = true;
    }

    i++;
  }
  return trovato;
}

//funzione che ritorna un numero random tra range min e max//

function generaNumeroRandom (numMin, numMax) {
  var numero = Math.floor(Math.random() * (numMax - numMin + 1) + numMin);
  return numero;
}

//BONUS: all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
//difficoltà 0 => tra 1 e 100
//difficoltà 1 =>  tra 1 e 80
//difficoltà 2 => tra 1 e 50
var difficolta = parseInt(prompt("Inserisci il livello di difficoltà tra 0, 1,2"));

var range;
switch (difficolta) {
  case 0 :
    range = 100;
    break;
  case 1 :
    range = 80;
    break;
  case 2 :
    range = 50;
  break;
}

var possibilita = range - 16;

//1. Il computer deve generare 16 numeri casuali tra 1 e 100. I numeri non possono essere duplicati

while (listaBombe.length < 16) {
  var numCasuale = generaNumeroRandom (1, 100);

  if (inArray(listaBombe, numCasuale) == false) {
    listaBombe.push(numCasuale);
  }
}
console.log(listaBombe);

//2. Chiedo all’utente (100 - 16) 84 volte di inserire un numero  tra 1 e 100.
//Se il numero inserito è fra quelli generati precedentemente, la partita termina.

var numeriInseriti = []
var bombaEsplosa = false;

while (numeriInseriti.length < 84 && bombaEsplosa == false) {
  var numeroUtente = parseInt(prompt("Inserisci un numero tra 1 e 100"));

   if (inArray(numeriInseriti, numeroUtente) == false){
     if (inArray(listaBombe, numeroUtente) == true) {
       bombaEsplosa = true;
     } else {
       numeriInseriti.push(numeroUtente);
     }
    }
 }

//3. Stampo il risultato oppure il massimo dei numeri consentiti

 if (bombaEsplosa == true) {
   alert("Hai perso al livello : " + numeriInseriti.length);
 } else {
   alert("Hai vinto!");
 }
