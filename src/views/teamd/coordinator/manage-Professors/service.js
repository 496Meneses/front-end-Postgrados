import axios from 'axios'
const API_URL = 'http://localhost:8000';

export default class CreateProfessor{
    
    create(Professor){
        const url= `${API_URL}/api/1.0/crear_profesor/`;
        return axios.post(url,Professor);
    }
}
