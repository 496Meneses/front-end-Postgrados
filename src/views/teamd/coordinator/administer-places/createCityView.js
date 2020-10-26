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
    Typography,

    
  } from '@material-ui/core';

const createCity = new CreatePlacesService();
const list = new CreatePlacesService();
export default class CreateCityView extends Component{

    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.name = React.createRef();
        this.department = React.createRef();
        this.country = React.createRef();
    }
    options(){
        list.listCountries({
            
        }).then(async (result)=>{
            document.getElementById("opcionesCountries").innerHTML=" ";
            result.data.Paises.forEach(elemento => {
                
                let option = document.createElement("option")
                option.setAttribute("value", elemento.id)
                let textOption = document.createTextNode(elemento.nombre)
                option.appendChild(textOption)
                document.getElementById("opcionesCountries").appendChild(option);
                    
            })
            

            
            
        }).catch(()=>{
            
        });

        list.listDeparments("1").then(async (result)=>{
            document.getElementById("opcionesDeparments").innerHTML=" ";
            result.data.Paises.forEach(elemento => {
                
                let option = document.createElement("option")
                option.setAttribute("value", elemento.id)
                let textOption = document.createTextNode(elemento.nombre)
                option.appendChild(textOption)
                document.getElementById("opcionesDeparments").appendChild(option);
                    
            })
            

            
            
        }).catch(()=>{
            
        });


        }
    handleCreate(){
        let selectCountry = document.getElementById('opcionesCountries').value;
        createCity.CreateCity({
            "nombre": this.name.current.value,
            "departamento": this.department.current.value,
            "pais": selectCountry,
            
        }).then((result)=>{

            document.getElementById("contenedorCity").innerHTML="<div class='alert alert-success' role='alert'>Ciudad creada correctamente!</div>";


        }).catch(()=>{
            document.getElementById("contenedorCity").innerHTML="<div class='alert alert-danger' role='alert'>Error!.Verifica los datos!</div>";
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
                    city:'',
                    departnemt:'',
                    country:''

                    }}
                    validationSchema={
                        Yup.object().shape({
                            city: Yup.string().max(255).required('name is required'),
                            department: Yup.string().max(255).required('department is required'),
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
            {this.options()}
            <Box
                display="flex"
                flexDirection="column"
                height="100%"
                justifyContent="center"
            >
                <form  onSubmit={this.handleSubmit}>
                    <Box mb={3}>
                    <TextField
                        error={Boolean(touched.city && errors.city)}
                        fullWidth
                        helperText={touched.city && errors.city}
                        label="Nombre de la ciudad"
                        margin="normal"
                        name="city"
                        inputRef={this.name}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        type="text"
                        value={values.name}
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
                        {/* <Typography
                                    color="textPrimary"
                                    variant="h5"
                                    mb={10}
                        >
                                    Seleccionar el departamento
                        </Typography>
                        <select className="browser-default custom-select mt-2" id="opcionesDeparments">
                        

                        </select> */}
                        <Typography
                                    color="textPrimary"
                                    variant="h5"
                                    mb={10}
                        >
                                    Seleccionar el pais
                        </Typography>
                        <select className="browser-default custom-select mt-2" id="opcionesCountries">
                        

                        </select>
                        
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
            <div id="contenedorCity">

            </div>
            </>
            )}
            </Formik>
            </Container>
        
    )
    }
}
