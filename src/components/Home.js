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
        <div className="grid-container">
            <div className="row">
                {
                listaIphone &&  listaIphone.length > 0 ?  listaIphone.map((iphone, index) => (
                        <div className="col-md-4" style={{marginBottom:"1rem"}} key={index}>
                            <div className="card" style={{ width: "18rem" }} key={index}>
                                <img src={iphone.copertina} style={{width:"200px",height:"180px"}}  className="card-img-top" alt="immagine iphone" />
                                <div className="card-body" >
                                    <h5 className="card-title">{iphone.model}</h5>
                                    <p className="card-text">{iphone.description}</p>
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