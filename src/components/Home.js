import React, { useEffect, useState } from "react";
import {getListaIphone} from "../service/IphoneService";

function Home() {
    const [listaIphone, setListaIphone] = useState([])

    useEffect(() => {
        getListaIphone().then(respose => {
            setListaIphone(respose.data.listaIphone)
        }).catch(error => {
            alert(error)
        })
      },[]);

    return (
       <div>HOME</div>
    )
}
export default Home