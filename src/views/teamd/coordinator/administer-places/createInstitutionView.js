import React,{Component} from 'react';
import CreatePlacesService from './service';
import * as Yup from 'yup';
import { Formik } from 'formik';
import 'src/views/teamd/coordinator/administer-GI/node_modules/bootstrap/dist/css/bootstrap.min.css';

import {
    Box,
    Button,
    Container,
    TextField,

    
  } from '@material-ui/core';

const createInstitution = new CreatePlacesService();
export default class CreateInstitutionView extends Component{

    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.name = React.createRef();
        this.city = React.createRef();
        this.department = React.createRef();
        this.country = React.createRef();
    }
    handleCreate(){
        createInstitution.CreateInstitution({
            "nombre_ins": this.name.current.value,
            "ciudad": this.city.current.value,
            "departamento": this.department.current.value,
            "pais": this.country.current.value

            
        }).then((result)=>{

            document.getElementById("contenedorCountry").innerHTML="<div class='alert alert-success' role='alert'>Institucion creada correctamente!</div>";


        }).catch(()=>{
            document.getElementById("contenedorCountry").innerHTML="<div class='alert alert-danger' role='alert'>Error!.Verifica los datos!</div>";
        });
           
    }
    handleSubmit(event){
        this.handleCreate();
        event.preventDefault();
    }

    render(){
        return(
            <Container maxWidth="sm">
            <Formik
                initialValues={{
                    nombre:'',

                    }}
                    validationSchema={
                        Yup.object().shape({
                          name: Yup.string().max(255).required('name is required'),
                          
                          city: Yup.string().max(255).required('city is required'),
                          department: Yup.string().max(255).required('deparment is required'),
                          country: Yup.string().max(255).required('country is required'),

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
                <form  onSubmit={this.handleSubmit}>
                    <Box mb={3}>
                    <TextField
                        error={Boolean(touched.name && errors.name)}
                        fullWidth
                        helperText={touched.name && errors.name}
                        label="Nombre institucion"
                        margin="normal"
                        name="name"
                        inputRef={this.name}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        type="text"
                        value={values.name}
                        variant="outlined"
                        />
                    <TextField
                        error={Boolean(touched.city && errors.city)}
                        fullWidth
                        helperText={touched.city && errors.city}
                        label="Ciudad a la que pertenece"
                        margin="normal"
                        name="city"
                        inputRef={this.city}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        type="text"
                        value={values.city}
                        variant="outlined"
                        />
                        <TextField
                        error={Boolean(touched.department && errors.department)}
                        fullWidth
                        helperText={touched.department  && errors.department }
                        label="Departamento a la que pertenece"
                        margin="normal"
                        name="department"
                        inputRef={this.department}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        type="text"
                        value={values.deparment}
                        variant="outlined"
                        />
                        <TextField
                        error={Boolean(touched.country && errors.country)}
                        fullWidth
                        helperText={touched.country && errors.country}
                        label="Pais al que pertenece"
                        margin="normal"
                        name="country"
                        inputRef={this.country}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        type="text"
                        value={values.country}
                        variant="outlined"
                        />
                        
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
            <div id="contenedorCountry">

            </div>
            </>
            )}
            </Formik>
            </Container>
        
    )
    }
}
