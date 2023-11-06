import React from "react";
import logo from "../resource/logo.svg"

function Chisiamo() {

    return (
        <div className="container" style={{marginTop:"1rem"}}>
            <img src={logo} alt="logo" ></img>
            <div className="chisiamo-content">
                <h2>Chi Siamo</h2>
                <p style={{ textAlign: "justify" }}><em>
                    Benvenuti in iPhoneStore, la tua destinazione di fiducia per l'acquisto di iPhone di alta qualità e prodotti correlati. Siamo appassionati di tecnologia e appassionati di iPhone, e ci impegniamo a offrire ai nostri clienti la migliore esperienza di acquisto possibile.
                </em></p>
                <h3>La Nostra Storia</h3>
                <p style={{ textAlign: "justify" }}><em>
                    Fondata nel [2017], iPhoneStore è cresciuta costantemente nel corso degli anni, diventando una delle principali destinazioni online per gli amanti dell'iPhone. La nostra missione è semplice: offrire una vasta gamma di prodotti Apple a prezzi competitivi, mantenendo al contempo la qualità e la soddisfazione del cliente come principi fondamentali del nostro business.
                </em></p>
                <h3>La Nostra Passione</h3>
                <p style={{ textAlign: "justify" }}><em>
                    Siamo appassionati di tecnologia e crediamo che l'iPhone sia uno dei dispositivi più innovativi e rivoluzionari mai creati. La nostra passione per l'iPhone si riflette nella cura che mettiamo nella selezione dei prodotti che offriamo. Ogni iPhone nel nostro catalogo è stato attentamente selezionato e sottoposto a rigorosi controlli di qualità per garantire che i nostri clienti ricevano solo prodotti autentici e in perfette condizioni.
                </em></p>
                <h3>Il Nostro Impegno</h3>
                <ul style={{ textAlign: "justify" }}><em>
                    <li>Prodotti Autentici: Garantiamo che tutti i nostri prodotti siano 100% autentici e originali, forniti direttamente da Apple o da rivenditori autorizzati.</li>
                    <li>Servizio Clienti Eccezionale: Il nostro team di assistenza clienti è sempre disponibile per rispondere alle tue domande e risolvere eventuali problemi. La tua soddisfazione è la nostra priorità numero uno.</li>
                    <li>Prezzi Competitivi: Cerchiamo costantemente di offrire i prezzi più competitivi sul mercato, in modo da poter ottenere il massimo valore per il tuo denaro.</li>
                    <li>Spedizioni Veloci e Sicure: Garantiamo spedizioni rapide e sicure in modo da ricevere il tuo iPhone nel minor tempo possibile.</li>
                    <li>Informazioni e Risorse: Siamo qui per aiutarti a prendere decisioni informate. Offriamo guide, recensioni e informazioni aggiornate sugli ultimi modelli di iPhone e accessori disponibili sul mercato.</li>
                </em></ul>
                <p style={{ textAlign: "justify" }}><em>
                    Siamo orgogliosi di servire clienti in tutto il mondo e di essere parte della comunità globale di appassionati di iPhone.
                    Grazie per aver scelto iPhoneStore come tua fonte fidata per l'acquisto di iPhone e prodotti Apple.
                    Speriamo che tu trovi il nostro negozio online un luogo accogliente per esplorare le ultime innovazioni tecnologiche e soddisfare le tue esigenze di dispositivo mobile.
                    Grazie per la tua fiducia in iPhoneStore. Siamo entusiasti di darti il benvenuto nella nostra comunità e di aiutarti a scoprire il mondo straordinario dell'iPhone.
                </em></p>
                <h3>Contattaci</h3>
                <p ><em>
                    Se hai domande o hai bisogno di assistenza, non esitare a contattarci. Il nostro team di supporto clienti è sempre pronto ad aiutarti.
                </em></p>
                <p ><em>
                    Grazie per aver scelto iPhoneStore! Siamo qui per te.
                </em></p>
            </div>
        </div>
    );
}

export default Chisiamo;