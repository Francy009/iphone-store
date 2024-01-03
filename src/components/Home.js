import React, { useEffect, useState } from "react";
import { getListaIphone } from "../service/IphoneService";
import { useNavigate } from "react-router-dom";




function Home() {
    const [listaIphone, setListaIphone] = useState([])
    const navigate = useNavigate();

   
    useEffect(() => {
        getListaIphone().then(respose => {
            setListaIphone(respose.data.listaIphone)
        }).catch(error => {
            alert(error)
        })
    }, []);

    const handleClick = (id) => {
        navigate("/dettagli/"+id) 
    }

    return (
        <div className="container" style={{ marginTop: "1rem" }}>
            <div className="row" >
                {
                    listaIphone && listaIphone.length > 0 ? listaIphone.map((iphone, index) => (
                        <div className="col" key={index}>
                            <div className="card h-100 roudend " style={{ border: "2px solid blue" }} key={index} >
                                <img src={iphone.copertina} className="card-img-top" alt="immagine iphone" />
                                <div className="card-body" >
                                    <div className="row">
                                        <h5 className="card-title">{iphone.model}</h5>
                                    </div>
                                    <div className="row">
                                        <p className="card-text justify-content" >{iphone.description}</p>
                                    </div>
                                </div>
                                <div className="card-footer-none bg-white">
                                    <button disabled={iphone.disponibile==="no"}
                                    onClick={()=>handleClick(iphone.id)} 
                                    className="btn btn-primary mb-3">{iphone.disponibile==="si"?"Dettagli":"Non disponibile"}</button>
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