import React, {useState} from 'react';
import { Modal, Button } from 'react-bootstrap';
import styled from 'styled-components';
import {addItemToCart} from "../redux/reducers/cart-reducer";
import {useDispatch} from "react-redux";

export function ModaleAcquisto(props) {
    const [selectedMemoria, setSelectedMemoria] = useState("");
    const [selectedColorazione, setSelectedColorazione] = useState("");
    const dispatch = useDispatch();

    const StyledLabel = styled.label`
    margin-right: 8px; 
    font-weight: bold;  
`;
    const StyledSelect = styled.select`
    padding: 8px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        border-color: #888;
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    }
`;


    const {mostraModale, chiudiModale, dettagli } = props
    const handleConferma = () => {
        const memoriaSelezionata = dettagli.memoriaPrezzo.find((opzione) => opzione.id === parseInt(selectedMemoria, 10));
        const colorazioneSelezionata = dettagli.colorazioni.find((colorazione) => colorazione.id === parseInt(selectedColorazione, 10));

        // Crea il nuovo oggetto configurazione
        const iphone = {
            id: dettagli.id,
            nome: dettagli.nome,
            memoria: memoriaSelezionata.capacita,
            colore: colorazioneSelezionata.nome,
            prezzo: memoriaSelezionata.prezzo,
            immagine: dettagli.immagine,
            quantita:1
        };

        dispatch(addItemToCart(iphone));
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
                    <StyledLabel htmlFor="colorazioneSelect">Seleziona la colorazione:</StyledLabel>
                    <StyledSelect
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
                    </StyledSelect>
                </div>
                <div className="my-3 w-100">
                    <StyledLabel htmlFor="colorazioneSelect" className="mr-2">Seleziona la colorazione:</StyledLabel>
                    <StyledSelect
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
                    </StyledSelect>
                </div>
                <div className="my-3">
                    <p>Prezzo: €{dettagli.memoriaPrezzo.find((opzione) => opzione.id === parseInt(selectedMemoria, 10))?.prezzo}</p>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={()=>handleConferma()} disabled={!selectedMemoria || !selectedColorazione}>
                    Aggiungi al carrello
                </Button>
            </Modal.Footer>
        </Modal>
    );
}