import axios from 'axios'
const API_URL = 'http://localhost:8000';

export default class CreatePlacesService{
    
    CreateCountry(Country){
        const url= `${API_URL}/api/1.0/crear_pais/`;
        return axios.post(url,Country);
    }
    CreateDeparment(Deparment){
        const url= `${API_URL}/api/1.0/crear_departamento/`;
        return axios.post(url,Deparment);
    }
    CreateCity(City){
        const url= `${API_URL}/api/1.0/crear_ciudad/`;
        return axios.post(url,City);
    }
    CreateInstitution(Institution){
        const url= `${API_URL}/api/1.0/crear_institucion/`;
        return axios.post(url,Institution);
    }
    listCountries(){
        const url= `${API_URL}/api/1.0/listar_paises/`;
        return axios.get(url);
    }
    listDeparments(idPais){

        const url= `${API_URL}/api/1.0/listar_departamentos/${idPais}`;
        return axios.get(url);
    }
    

}