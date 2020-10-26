import React,{Component} from 'react';
import CreateGI from './service';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
    Box,
    Button,
    Container,
    TextField,

    
  } from '@material-ui/core';

const createGI = new CreateGI();
export default class AddKnowLedgeView extends Component{

    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.title = React.createRef();
        this.description = React.createRef();
        //this.startDate = React.createRef();
        //this.endDate= React.createRef();
        //this.state = React.createRef();
    }
    handleCreate(){
        createGI.AddKnowLedgeService({
            "nombre": this.title.current.value,
            "descripcion": this.description.current.value
            //"fechainicio": this.startDate.current.value,
            //"fechafin": this.endDate.current.value,
            //"estado": this.state.current.value,
            
        }).then((result)=>{
            alert ("Area de conocimiento agregada creado!");
        }).catch(()=>{
            alert("Error");
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
                    title:'',
                    description:'',
                    startDate:'',
                    endDate:'',
                    state:''
                    }}
                    validationSchema={
                        Yup.object().shape({
                          title: Yup.string().max(255).required('Title is required'),
                          description: Yup.string().max(255).required('Description is required'),
                          startDate: Yup.string().max(255).required('startDate is required'),
                          endDate: Yup.string().max(255).required('endDate is required'),
                          state: Yup.string().max(255).required('State is required')
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
            <Box
                display="flex"
                flexDirection="column"
                height="100%"
                justifyContent="center"
            >
                <form  onSubmit={this.handleSubmit}>
                    <Box mb={3}>
                    <TextField
                        error={Boolean(touched.title && errors.title)}
                        fullWidth
                        helperText={touched.title && errors.title}
                        label="Title"
                        margin="normal"
                        name="title"
                        inputRef={this.title}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        type="text"
                        value={values.title}
                        variant="outlined"
                        />
                        <TextField
                        error={Boolean(touched.description && errors.description)}
                        fullWidth
                        helperText={touched.description && errors.description}
                        label="Descripcion"
                        margin="normal"
                        name="description"
                        inputRef={this.description}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        type="text"
                        value={values.description}
                        variant="outlined"
                        />
                        {/* <TextField
                        label="Fecha inicio"
                        type="date"
                        inputRef = {this.startDate}
                        defaultValue="2020-01-01"
                        InputLabelProps={{
                        shrink: true,
                        }}
                        />
                        <TextField
                        label="Fecha fin"
                        type="date"
                        inputRef = {this.endDate}
                        defaultValue="2020-01-01"
                        InputLabelProps={{
                        shrink: true,
                        }}
                        /> */}
                        {/* <TextField
                        error={Boolean(touched.state && errors.state)}
                        fullWidth
                        helperText={touched.state && errors.state}
                        label="Estado"
                        margin="normal"
                        name="state"
                        inputRef={this.state}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        type="text"
                        value={values.state}
                        variant="outlined"
                        /> */}
                        <Box my={2}>
                            <Button
                                color="primary"
                                fullWidth
                                size="large"
                                type="submit"
                                variant="contained"
                                
                            >
                                Agregar
                            </Button>
                        </Box>
                    </Box>   
                </form>
            </Box>
            )}
            </Formik>
            </Container>
        
    )
    }
}
