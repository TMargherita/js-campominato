//1.Il computer deve generare 16 numeri casuali tra 1 e 100. I numeri non possono essere duplicati
var numeriCasuali = generaNumeroRandom (1,100);
while (numeriCasuali >= 1 && numeriCasuali <= 100) {
  console.log(numeriCasuali[i]);
}

//2.In seguito deve chiedere all'utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.L'utente non può inserire più volte lo stesso numero.
//3.Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all'utente un altro numero.La partita termina quando il giocatore inserisce un numero "vietato" o raggiunge il numero massimo possibile di numeri consentiti.
//4.Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha inserito un numero consentito.




//funzioni

function generaNumeroRandom(min, max) {
  var numero = Math.floor(Math.random() * (max - min + 1)) + min;
  return numero;
}
