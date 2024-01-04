import React, {useEffect, useState} from 'react';
import { Modal, Button } from 'react-bootstrap';
import {getDettagliIphone, getDettaglioAcquistoIphone} from "../service/IphoneService";

export function ModaleAcquisto(props) {
    const [selectedMemoria, setSelectedMemoria] = useState("");
    const [selectedColorazione, setSelectedColorazione] = useState("");

    const {id, mostraModale, chiudiModale, dettagli } = props
    // const dettagli = {
    //     "id": 4,
    //     "immagine": "https://www.tradeinn.com/f/14037/140370793/apple-iphone-15-pro-max-512gb.jpg",
    //     "nome": "iPhone 15 Pro Max",
    //     "capacitaDellaBatteria": "3500 mAh",
    //     "memoriaPrezzo": [
    //         {"id": 0, "capacita": "256 GB", "prezzo": "1099 €"},
    //         {"id": 1, "capacita": "512 GB", "prezzo": "1199 €"},
    //         {"id": 2, "capacita": "1 TB", "prezzo": "1299 €"}
    //     ],
    //     "colorazioni": [
    //         {"id": 0, "nome": "Pacific Blue"},
    //         {"id": 1, "nome": "Graphite"},
    //         {"id": 2, "nome": "Silver"}
    //     ],
    //     "pezziDisponibili": 1,
    // };
    const handleConferma = () => {
        // Esegui azioni desiderate con le selezioni
        console.log("Memoria selezionata:", selectedMemoria);
        console.log("Colorazione selezionata:", selectedColorazione);

        // Ottieni la configurazione corrispondente
        const memoriaSelezionata = dettagli.memoriaPrezzo.find((opzione) => opzione.id === parseInt(selectedMemoria, 10));
        const colorazioneSelezionata = dettagli.colorazioni.find((colorazione) => colorazione.id === parseInt(selectedColorazione, 10));

        // Crea il nuovo oggetto configurazione
        const nuovaConfigurazione = {
            id: dettagli.id,
            nome: dettagli.nome,
            idMemoria: memoriaSelezionata.id,
            idColorazione: colorazioneSelezionata.id,
            prezzo: memoriaSelezionata.prezzo,
            immagine: dettagli.immagine,
        };

        // Fai qualcosa con la nuova configurazione (ad esempio, salvare in uno stato, inviare a un server, ecc.)
        console.log("Nuova configurazione:", nuovaConfigurazione);

        // Chiudi la modale
        chiudiModale();
    };

    return (
        <Modal show={mostraModale} onHide={chiudiModale}>
            <Modal.Header closeButton>
                <Modal.Title>{dettagli.nome}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="d-flex flex-column align-items-center">
                <img src={dettagli.immagine} alt={dettagli.nome} style={{ maxWidth: '100%', height: 'auto' }} />
                <div className="my-3 w-100">
                    <label htmlFor="memoriaSelect" className="mr-2">Seleziona la memoria:</label>
                    <select
                        id="memoriaSelect"
                        value={selectedMemoria}
                        onChange={(e) => setSelectedMemoria(e.target.value)}
                    >
                        <option value="">Seleziona la memoria</option>
                        {dettagli.memoriaPrezzo.map((opzione) => (
                            <option key={opzione.id} value={opzione.id}>
                                {opzione.capacita}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="my-3 w-100">
                    <label htmlFor="colorazioneSelect" className="mr-2">Seleziona la colorazione:</label>
                    <select
                        id="colorazioneSelect"
                        value={selectedColorazione}
                        onChange={(e) => setSelectedColorazione(e.target.value)}
                    >
                        <option value="">Seleziona la colorazione</option>
                        {dettagli.colorazioni.map((colorazione) => (
                            <option key={colorazione.id} value={colorazione.id}>
                                {colorazione.nome}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="my-3">
                    <p>Prezzo: {dettagli.memoriaPrezzo.find((opzione) => opzione.id === parseInt(selectedMemoria, 10))?.prezzo}</p>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleConferma} disabled={!selectedMemoria || !selectedColorazione}>
                    Aggiungi al carrello
                </Button>
            </Modal.Footer>
        </Modal>
    );
}