import axios from 'axios';

const SERVICE_IPHONE = "http://localhost:8080/"
export const getListaIphone = () => {
    return axios.get(SERVICE_IPHONE + "lista-iphone")
}
export const contattaciPost=(body)=>{
    return axios.post(SERVICE_IPHONE+"contattaci",{
        nome:body.nome,
        email:body.email,
        messaggio:body.messaggio
    })
}
export const getDettagliIphone=(id)=>{
    return axios.get(SERVICE_IPHONE+ "dettagli-iphone/"+id)
}

export const getDettaglioAcquistoIphone=(id)=>{
    return axios.get(SERVICE_IPHONE+ "dettaglio-acquisto-iphone/"+id)
}
