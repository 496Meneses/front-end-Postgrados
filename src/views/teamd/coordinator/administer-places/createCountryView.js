import React,{Component} from 'react';
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
export default class CreateCountryView extends Component{

    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.nombre = React.createRef();
    }
    handleCreate(){
        createCountry.CreateCountry({
            "nombre": this.nombre.current.value,
    
        }).then((result)=>{

            document.getElementById("contenedorCountry").innerHTML="<div class='alert alert-success' role='alert'>Pais creado correctamente!</div>";


        }).catch(()=>{
            document.getElementById("contenedorCountry").innerHTML="<div class='alert alert-danger' role='alert'>Error!.Verifica los datos!</div>";
        });
           
    }
    handleSubmit(event){
        event.preventDefault();
        this.handleCreate();
    }

    render(){
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
                <form  onSubmit={this.handleSubmit}>
                    <Box mb={3}>
                        <TextField
                        error={Boolean(touched.name && errors.name)}
                        fullWidth
                        helperText={touched.name && errors.name}
                        label="Nombre"
                        margin="normal"
                        name="name"
                        inputRef={this.nombre}
                        onBlur={handleBlur}
                        onChange={handleChange}
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
}
