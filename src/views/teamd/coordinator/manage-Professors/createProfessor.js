import React,{Component} from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import CreateProfessor from './service'
import 'src/views/teamd/coordinator/administer-places/node_modules/src/views/teamd/coordinator/administer-GI/node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
    Box,
    Button,
    TextField,
    Container,
    Typography,

    
  } from '@material-ui/core';
const createProfessor=new CreateProfessor();

export default class CreateProfessorView extends Component{

    handleChange = (event) => {
        this.setAge(event.target.value);
      };
    
      handleClose = () => {
        this.setOpen(false);
      };
    
        handleOpen = () => {
        this.setOpen(true);
      };



    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.name = React.createRef();
        this.identification = React.createRef();
        this.lastName = React.createRef();
        this.isInternal = React.createRef();
    }

    handleCreate(){
        if(this.isInternal.current.value === "Si"){
            this.isInternal = 1
        }else{
            this.isInternal = 0
        }
        createProfessor.create({

            "cedula": this.identification.current.value,
            "nombre": this.name.current.value,
            "apellido": this.lastName.current.value,
            "es_interno": this.isInternal

            
        }).then((result)=>{

            document.getElementById("contenedorProfesor").innerHTML="<div class='alert alert-success' role='alert'>Profesor creado correctamente!</div>";


        }).catch(()=>{
            document.getElementById("contenedorProfesor").innerHTML="<div class='alert alert-danger' role='alert'>Error!.Verifica los datos!</div>";
        });
           
    }
    handleSubmit(event){
        this.handleCreate();
        event.preventDefault();
    }


    render(){return(
        
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
                <form  onSubmit={this.handleSubmit}>
                    <Box mb={3}>
                        <TextField
                        error={Boolean(touched.identification && errors.identification)}
                        fullWidth
                        helperText={touched.identification && errors.identification}
                        label="Cedula"
                        margin="normal"
                        name="identification"
                        inputRef={this.identification}
                        onBlur={handleBlur}
                        onChange={handleChange}
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
                        inputRef={this.name}
                        onBlur={handleBlur}
                        onChange={handleChange}
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
                        inputRef={this.lastName}
                        onBlur={handleBlur}
                        onChange={handleChange}
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
                        <select style={{marginTop: '0px' , width: '50px', height: '25px', marginLeft:'15px'}}  ref={this.isInternal}id="cars">
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
    )}
}
