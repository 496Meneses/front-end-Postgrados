import axios from 'axios'
const API_URL = 'http://localhost:8000';

export default class CreateGIService{
    
    CreateGI(GI){
        const url= `${API_URL}/api/1.0/crear_grupo_investigacion/`;
        return axios.post(url,GI);
    }
    //Todo
    ListProfessor(IdGi){
        const url= `${API_URL}/api/1.0/listar_profesor/`;
        return axios.post(url,IdGi);
    }
}