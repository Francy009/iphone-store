import React, { useState } from "react";
import { contattaciPost } from "../service/IphoneService";


function Contattaci() {
    const newContattaci={
        nome: '',
        email: '',
        messaggio: ''
    }

    const [contattaci, setContattaci] = useState(newContattaci);

    const handleChange = (event) => {
        const { id, value } = event.target;
        setContattaci({
            ...contattaci,
            [id]: value
        });
    }
    const handleClick = () => {
        if(contattaci.nome  &&  contattaci.email && contattaci.messaggio){
            contattaciPost(contattaci).then(response=>{
                alert("Messaggio inviato correttamente");
                setContattaci(newContattaci)
            }).catch(error =>{
                alert(error)
            })
            return;  
        }
        alert('Valorizza tutti i campi') ; 
    }

    return (
        <div className="container ">
            <h1>CONTATTACI</h1>
            <div className="row justify-content-center" >
                <div className="col-6" >
                    <input className="col-6" id="nome" type="text" placeholder="nome.." value={Contattaci.nome} onChange={handleChange}></input>
                </div>
            </div>
            <div className="row justify-content-center" >
                <div className="col-6">
                    <input id="email" className="col-6" type="email" placeholder="email.."  value={Contattaci.email} onChange={handleChange}></input>
                </div>
            </div>
            <div className="row justify-content-center" >
                <div className="col-6">
                    <textarea className="col-6" row='5' id="messaggio" placeholder="Digita il tuo messaggio.."  value={Contattaci.messaggio} onChange={handleChange}></textarea>
                </div>
            </div>
            <button onClick={handleClick}>contattaci</button>
        </div>
    )
}
export default Contattaci