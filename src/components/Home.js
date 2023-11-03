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
        <div className="container">
            {
                listaIphone.length > 0 ? listaIphone.map((iphone, index) => (
                    <div className="card" style={{ width: "18rem" }} key={index}>
                      <img src="..." className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">{iphone.model}</h5>
                        <p className="card-text">{iphone.description}</p>
                        <a href="#" className="btn btn-primary">Dettagli</a>
                      </div>
                    </div>
                  )) : null
            }
        </div>

    )
}
export default Home