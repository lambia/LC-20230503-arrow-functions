document.getElementById("pulsante1").addEventListener("click", mostraElementoCliccato);

document.getElementById("pulsante2").addEventListener("click", mostraElementoCliccato);

// document.getElementById("pulsante3").addEventListener("click", function() { console.log(this); });

document.getElementById("pulsante3").addEventListener("click", () => console.log(this) );

function mostraElementoCliccato() {
    console.log("Elemento cliccato: ", this);
    console.log("Testo dell'elemento cliccato: ", this.innerText);
}


//Funzioni arrow con nome e graffe => vuol dire che potete eseguire più istruzioni
const funzioneArrowConNomeGraffe = () => {
    console.log("Funziona!!"); console.log("Seconda istruzione!!");
}

funzioneArrowConNomeGraffe();

//Funzioni arrow con nome SENZA graffe => vuol dire che potete eseguire solo UNA istruzione
const funzioneArrowConNomeSenzaGraffe = () => console.log("Funziona senza graffe!!");

funzioneArrowConNomeSenzaGraffe();

//Funzione arrow con nome, SENZA graffe, con argomento
const funzioneArrowConNomeSenzaGraffeConArgomento = (messaggio) => console.log(messaggio);

funzioneArrowConNomeSenzaGraffeConArgomento("stampami questo");

//Funzione arrow con nome, senza graffe, che restituisce un dato
const ritornaQuarantadue = () => Math.floor( (15+2)/3 );
// function ritornaQuarantadue() {
//     return Math.floor( (15+2)/3 );
// }

const dato = ritornaQuarantadue();
console.log("Dato ritornato: ", dato);


	