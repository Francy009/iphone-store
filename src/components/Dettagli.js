import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdCard, faMobile, faMemory, faDollarSign, faCogs, faCamera, faBatteryFull, faMicrochip, faBuilding, faLayerGroup, faCoins } from '@fortawesome/free-solid-svg-icons';
import { getDettagliIphone } from "../service/IphoneService";

function Dettagli() {

    const { id } = useParams();

    const [dettagli, setDettagli] = useState([]);

    const [titolo, setTitolo] = useState('');
    const [righe, setRighe] = useState([[]])


    useEffect(() => {
        getDettagliIphone(id).then(respose => {
            setTitolo(respose.data.modello)
            setDettagli(respose.data.listaDettagliIphone)
        }).catch(error => {
            alert(error)
        })
    }, [id])

    useEffect(() => {
        dettagli.forEach((dettaglio) => {
            let arrayDiStringhe = Object.values(dettaglio).map(String);
            setRighe([...righe, arrayDiStringhe])
        })
    }, [dettagli])

    return (
        <div className="table">
            <h1 className="text-center">{titolo}</h1>
            <table className="table">
                <thead>

                </thead>
                <tbody>
                    <tr className="row">
                        {dettagli.map((dettaglio) => (
                            <tr key={dettaglio.id} className="col-md-3 mb-4">
                                <td>
                                    <img
                                        src={dettaglio.immagine}
                                        alt={dettaglio.nome}
                                        className="img-thumbnail"
                                        style={{ maxWidth: '100px', maxHeight: '100px' }}
                                    />
                                </td>
                                <tr className="d-flex flex-column" >
                                <td>  <FontAwesomeIcon icon={faIdCard} />  {dettaglio.nome}</td>
                                    <td>
                                    <FontAwesomeIcon icon={faMicrochip} /> dimensioniSchermo:{dettaglio.dimensioniSchermo}</td>
                                    <td>
                                    <FontAwesomeIcon icon={faMicrochip} />  processore:{dettaglio.processore}</td>
                                    <td>
                                    <FontAwesomeIcon icon={faCamera} />fotocameraPrincipale:{dettaglio.fotocameraPrincipale}</td>
                                    <td>
                                    <FontAwesomeIcon icon={faBatteryFull} />  capacitaDellaBatteria:{dettaglio.capacitaDellaBatteria}</td>
                                    <td>
                                    <FontAwesomeIcon icon={faMemory} />   memoriaRAM:{dettaglio.memoriaRAM}</td>
                                    <td>
                                    <FontAwesomeIcon icon={faLayerGroup} />   memoriaInterna:{dettaglio.memoriaInterna}</td>
                                    <td>
                                    <FontAwesomeIcon icon={faDollarSign} />    prezzo:{dettaglio.prezzo}</td>
                                    <td>
                                    <FontAwesomeIcon icon={faCoins} />    pezziDisponibili:{dettaglio.pezziDisponibili}</td>
                                </tr>
                            </tr>

                        ))}
                    </tr>
                </tbody>

            </table>
        </div>

    )
}
export default Dettagli;