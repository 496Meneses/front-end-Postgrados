import { CameraRollSharp } from '@material-ui/icons';
import { castArray } from 'lodash';
import React, { useState,useEffect } from 'react';
import ListProfessors from './listProfessors';
import SearchProfessor from './searchProfessor';


const AddDirector = ()=>{

    
    // Constantes estado
    const [professor, setprofessor] = useState(" ");
    const [listProfessors, setListProfessors] = useState(
        [
            {
                id: 1233,
                name: "juan carlos",
                email: "juanCarlos@gmail.com",
                edad: 20,
                isDirector: true
            },
            {
                id: 1234,
                name: "Roberto",
                email: "icardi@gmail.com",
                edad: 24,
                isDirector: false
            },
            {
                id: 1255,
                name: "Ricardo Rodriguez",
                email: "Machote@gmail.com",
                edad: 24,
                isDirector: false
            },
            {
                id: 1266,
                name: "Susana Stivens",
                email: "Sexy22@gmail.com",
                edad: 27,
                isDirector: true
            },
            {
                id: 1277,
                name: "Rosa",
                email: "Roscon@gmail.com",
                edad: 26,
                isDirector: false
            }
        ]
    )

    //Peticiones back



    
    const onSearchProfessor = (searchName) =>{

        listProfessors.map( (object)=>{
        
            if (object.name.includes(searchName)){
                setprofessor(object)
            }
        })

    }
    const listingProfessors = () =>{
        if (professor === " " ){

            return <ListProfessors professors={listProfessors}/>
        }else{
            return <ListProfessors professors={professor}/>
        }
    }






    return (
    <>
        {console.log(listProfessors)}
        <SearchProfessor onSearchProfessor = {(search) => onSearchProfessor(search)} />
        {listingProfessors()}
    </>)
}

export default AddDirector;