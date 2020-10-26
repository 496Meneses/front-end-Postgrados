import React,{useState} from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {CreateProfessorApi} from './service'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Box,
    Button,
    TextField,
    Container,
    Typography,

    
  } from '@material-ui/core';

const CreateProfessorView = () => {


    const [name, setname] = useState("")
    const [identification, setidentification] = useState()
    const [lastName, setlastName] = useState("")
    const [isInternal, setisInternal] = useState("")
    const [age, setage] = useState("")

    //obtener inputs 
    const handleChangeIdentification = (e) =>{
        setidentification(e.target.value);
    }
    const handleChangeName = (e) =>{
        setname(e.target.value);
    }
    const handleChangeLastName = (e) =>{
        setlastName(e.target.value);
    }
    const handleChangeIsInternal = (e) =>{
        let selecteds = document.getElementById("selectedIsInternal");
        setisInternal(selecteds.options[selecteds.selectedIndex].text);

    }
    

    const handleCreate = () =>{

        if(isInternal === "Si"){
            setisInternal(1)
        }else{
            setisInternal(0)
        }
        CreateProfessorApi({

            "cedula": identification,
            "nombre": name,
            "apellido": lastName,
            "es_interno": isInternal

            
        }).then((result)=>{

            document.getElementById("contenedorProfesor").innerHTML="<div class='alert alert-success' role='alert'>Profesor creado correctamente!</div>";


        }).catch(()=>{
            document.getElementById("contenedorProfesor").innerHTML="<div class='alert alert-danger' role='alert'>Error!.Verifica los datos!</div>";
        });
           
    }
    const handleSubmit = (event) =>{
        handleCreate();
        event.preventDefault();
    }
    return(
        
        <Container maxWidth="sm">
        
        <Typography
                    color="textPrimary"
                    variant="h2"
                  >
                    Crear Profesor
        </Typography>
                  
        <Formik
        initialValues={{
            identification:'',
            name:'',
            lastName:''
            }}
            validationSchema={
                Yup.object().shape({
                  identification: Yup.string().max(255).required('Identification is required'),
                  name: Yup.string().max(255).required('Name is required'),
                  lastName: Yup.string().max(255).required('LastName is required')
                })
              }
              onSubmit={() => {
                
              }}
            
        >
        {({
              errors,
              handleBlur,
              handleChange,
              isSubmitting,
              touched,
              values
            }) => (
                <>
                <Box
                display="flex"
                flexDirection="column"
                height="100%"
                justifyContent="center"
            >
                <form  onSubmit={handleSubmit}>
                    <Box mb={3}>
                        <TextField
                        error={Boolean(touched.identification && errors.identification)}
                        fullWidth
                        helperText={touched.identification && errors.identification}
                        label="Cedula"
                        margin="normal"
                        name="identification"
                        onBlur={handleBlur}
                        onChange={handleChangeIdentification}
                        type="text"
                        value={values.identification}
                        variant="outlined"
                        />
                        <TextField
                        error={Boolean(touched.name && errors.name)}
                        fullWidth
                        helperText={touched.name && errors.name}
                        label="Nombre"
                        margin="normal"
                        name="name"
                        onBlur={handleBlur}
                        onChange={handleChangeName}
                        type="text"
                        value={values.name}
                        variant="outlined"
                        />
                        <TextField
                        error={Boolean(touched.lastName && errors.lastName)}
                        fullWidth
                        helperText={touched.lastName && errors.lastName}
                        label="Apellidos"
                        margin="normal"
                        name="lastName"
                        onBlur={handleBlur}
                        onChange={handleChangeLastName}
                        type="text"
                        value={values.lastName}
                        variant="outlined"
                        />
                        <div style={{display:'flex', marginTop: '10px', marginBottom: '10px'}}>
                        <Typography
                                    color="textPrimary"
                                    variant="h6"
                                >
                                    ¿Es interno?
                        </Typography>
                        <select style={{marginTop: '0px' , width: '50px', height: '25px', marginLeft:'15px'}} id="selectedIsInternal" onChange={handleChangeIsInternal}>
                            <option value="Si">Si</option>
                            <option value="No">No</option>
                        </select>  
                        </div>

                        

                        <Box my={2}>
                            <Button
                                color="primary"
                                fullWidth
                                size="large"
                                type="submit"
                                variant="contained"
                                
                            >
                                Crear
                            </Button>
                        </Box>
                    </Box>   
                </form>
            </Box>
            <div id="contenedorProfesor">

            </div>
            </>)}
        
        </Formik>
        
        </Container>
    )
}
export default CreateProfessorView;
