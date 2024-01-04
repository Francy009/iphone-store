import React, {useState} from 'react';
import { Modal, Button } from 'react-bootstrap';
export function ModaleAcquisto(props) {
    const [selectedMemoria, setSelectedMemoria] = useState("");
    const [selectedColorazione, setSelectedColorazione] = useState("");

    const {mostraModale, chiudiModale, dettagli } = props
    const handleConferma = () => {
        console.log("Memoria selezionata:", selectedMemoria);
        console.log("Colorazione selezionata:", selectedColorazione);

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

        console.log("Nuova configurazione:", nuovaConfigurazione);

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