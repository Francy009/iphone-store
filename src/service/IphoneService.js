import axios from 'axios';

const SERVICE_IPHONE = "http://localhost:8080/"
export const getListaIphone = () => {
    return axios.get(SERVICE_IPHONE + "lista-iphone")
}

