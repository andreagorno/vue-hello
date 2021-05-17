// Descrizione:
// Stampare a schermo un messaggio all'interno di un h1, utilizzando i data.
// Bonus:
// Aggiungere alla pagina un'immagine, presa anch'essa da un data.

var app = new Vue(
    {
        el: "#root",
        data: {
            messaggio: "Hello World",
            immagine: "https://www.lagiornatatipo.it/wp-content/uploads/2016/11/copertina-1140x633.png"
        }
    }
); 