import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faIdCard,
    faMobile,
    faMemory,
    faDollarSign,
    faCamera,
    faBatteryFull,
    faMicrochip,
    faLayerGroup,
} from '@fortawesome/free-solid-svg-icons';
import {getDettagliIphone, getDettaglioAcquistoIphone} from "../service/IphoneService";
import {ModaleAcquisto} from "./ModaleAcquisto";

function Dettagli() {

    const {id} = useParams();

    const [dettagli, setDettagli] = useState([]);

    const [titolo, setTitolo] = useState('');

    const [listaIcone] = useState([
        faIdCard, faMobile,
        faMicrochip, faCamera,
        faBatteryFull, faMemory,
        faLayerGroup, faDollarSign,

    ])
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [iphone, setIphone] = useState({});
    const chiudiModale =() =>{
        setIsModalOpen(false)
    }

    const handleChangeAcquista = (id) =>{
        getDettaglioAcquistoIphone(id).then(respose => {
            setIphone(respose.data)
            setIsModalOpen(true);
        }).catch(error => {
            alert(error)
        })
    }


    useEffect(() => {
        getDettagliIphone(id).then(respose => {
            setTitolo(respose.data.modello)
            setDettagli(respose.data.listaDettagliIphone)
        }).catch(error => {
            alert(error)
        })
    }, [id])


    return (
        <div className="container">
            <h1 className="text-center">{titolo}</h1>
            <table className="table">
                <tbody>
                    <tr className="row">
                        <tr className="col-md-1 mb-2" style={{ width: '100px', height: '100px', borderBottomWidth: '0' }}>
                            <td className="col-md-1 mb-2" style={{ width: '100px', height: '100px' }}></td>
                            <tr className="d-flex flex-column"  >
                                {listaIcone.map((icona, index) => (
                                    <td key={index}><FontAwesomeIcon icon={icona} /></td>
                                ))}
                            </tr>
                        </tr>
                        {dettagli.map((dettaglio, index) => (
                            <tr key={dettaglio.id} className="col-md-2 mb-2" style={{ border: '0' }}>
                                <td className="col-md-2 mb-2" >
                                    <img
                                        src={dettaglio.immagine}
                                        alt={dettaglio.nome}
                                        className="img-thumbnail"
                                        style={{ maxWidth: '100px', maxHeight: '100px', border: '0' }}
                                    />
                                </td>
                                <tr className=" d-flex flex-column "  >
                                    <td >{dettaglio.nome}</td>
                                    <td>{dettaglio.dimensioniSchermo}</td>
                                    <td >{dettaglio.processore}</td>
                                    <td >{dettaglio.fotocameraPrincipale}</td>
                                    <td >{dettaglio.capacitaDellaBatteria}</td>
                                    <td >{dettaglio.memoriaRAM}</td>
                                    <td >{dettaglio.memoriaInterna}</td>
                                    <td >A partire da {dettaglio.prezzo}</td>
                                    <td>
                                        <button className="btn btn-primary " 
                                        disabled={dettaglio.pezziDisponibili === 0}
                                        onClick={() => handleChangeAcquista(dettaglio.id)}>
                                       {dettaglio.pezziDisponibili === 0?'Non dispobile':'Acquista'}
                                        </button>
                                    </td>
                                </tr>

                        </tr>

                    ))}
                </tr>
                </tbody>

            </table>
            {isModalOpen && (
                        <ModaleAcquisto dettagli = {iphone} mostraModale = {isModalOpen} chiudiModale={()=>chiudiModale()}/>
                    )}

        </div>

    )
}

export default Dettagli