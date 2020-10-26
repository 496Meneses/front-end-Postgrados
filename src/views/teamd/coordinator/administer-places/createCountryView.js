import React,{Component, useState} from 'react';
import CreatePlacesService from './service';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Link as  useNavigate } from 'react-router-dom';
import 'src/views/teamd/coordinator/administer-GI/node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
    Box,
    Button,
    Container,
    TextField,

    
  } from '@material-ui/core';

const createCountry = new CreatePlacesService();
const CreateCountryView = () =>{


    const [name, setname] = useState(" ")

    const handleCreate = () =>{
        createCountry.CreateCountry({
            "nombre": name
    
        }).then((result)=>{

            document.getElementById("contenedorCountry").innerHTML="<div class='alert alert-success' role='alert'>Pais creado correctamente!</div>";


        }).catch(()=>{
            document.getElementById("contenedorCountry").innerHTML="<div class='alert alert-danger' role='alert'>Error!.Verifica los datos!</div>";
        });
           
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        handleCreate();
    }
    const handleOnchangeName = (e) => {
        setname(e.target.value)
    }
    return(
            <Container maxWidth="sm">
            <Formik
                initialValues={{
                    name:'',

                    }}
                    validationSchema={
                          Yup.object().shape({
                          name: Yup.string().max(255).required('name is required'),

                        })
                      }
                      onSubmit={() => {
                        useNavigate('/app/dashboard', { replace: true });
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
                        error={Boolean(touched.name && errors.name)}
                        fullWidth
                        helperText={touched.name && errors.name}
                        label="Nombre"
                        margin="normal"
                        name="name"
                        onChange = {handleOnchangeName}
                        onBlur={handleBlur}
                        type="text"
                        value={values.name}
                        variant="outlined"
                        />
                        
                        <Box my={2}>
                            <Button
                                color="primary"
                                disabled={isSubmitting}
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
            <div id="contenedorCountry">

            </div>
            </>


            )}
            </Formik>
            </Container>
            
        
    )
}

export default CreateCountryView; 
