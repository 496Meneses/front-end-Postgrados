
import axios from 'axios'
const API_URL = 'http://localhost:8000';

export default class CreateGI{
    
    AddKnowLedgeService(GI){
        const url= `${API_URL}/api/1.0/crear_area_conocimiento/`;
        return axios.post(url,GI);
    }
    AddLineRearchService(GI){
        const url= `${API_URL}/api/1.0/crear_linea_investigacion/`;
        return axios.post(url,GI);

        // NOTA MENTAL, CAMBIAR URL DEL BACK, ESTAN AL REVES
    }


}