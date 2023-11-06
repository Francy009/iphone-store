import React, { useEffect, useState } from "react";
import { getListaIphone } from "../service/IphoneService";


function Home() {
    const [listaIphone, setListaIphone] = useState([])

    useEffect(() => {
        getListaIphone().then(respose => {
            setListaIphone(respose.data.listaIphone)
        }).catch(error => {
            alert(error)
        })
    }, []);

    return (
        <div className="container" style={{marginTop:"1rem"}}>
            <div className="row" >
                {
                    listaIphone && listaIphone.length > 0 ? listaIphone.map((iphone, index) => (
                        <div className="col" key={index}>
                            <div className="card h-100 " key={index}>
                                <img src={iphone.copertina} className="card-img-top" alt="immagine iphone" />
                                <div className="card-body" >
                                    <div className="row">
                                        <h5 className="card-title">{iphone.model}</h5>
                                    </div>
                                    <div className="row">
                                        <p className="card-text justify-content"   >{iphone.description}</p>
                                    </div>
                                </div>
                                <div className="card-footer-none bg-white">
                                    <p className="btn btn-primary">Dettagli</p>
                                </div>
                            </div>
                        </div>
                    )) : <div>no content data</div>
                }
            </div>
        </div>

    )
}
export default Home