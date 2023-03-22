// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.


function prezzo() {
    let km = document.getElementById('km').value;
    let età = document.getElementById('eta').value;
    let biglietto = km * 0.21

    if (età < 18) {
        biglietto *= 0.8
        console.log(`Il prezzo del biglietto è di ${biglietto.toFixed(2)}`)
    }else if (età >= 65) {
        biglietto *= 0.6
        console.log(`Il prezzo del biglietto è di ${biglietto.toFixed(2)}`)
    }

    document.getElementById('prezzo').innerHTML = `Il prezzo del biglietto è di ${biglietto.toFixed(2)}€`
}