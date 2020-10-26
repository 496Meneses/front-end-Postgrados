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
const crearGI = new CreateGI();
export default class AddLineResearchView extends Component{

    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.title = React.createRef();
        this.description = React.createRef();
        this.KnowLedge = React.createRef();
    }
    handleCreate(){
        crearGI.AddLineRearchService({
            "nombre": this.title.current.value,
            "descripcion": this.description.current.value,
            "area_con" : this.KnowLedge.current.value,
            
        }).then((result)=>{
            alert ("Linea de investigacion agregada!");
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

                    }}
                    validationSchema={
                        Yup.object().shape({
                          title: Yup.string().max(255).required('Title is required'),
                          description: Yup.string().max(255).required('Description is required'),
                          KnowLedge: Yup.string().max(255).required('KnowLedge is required'),
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
                        
                        <TextField
                        error={Boolean(touched.KnowLedge && errors.KnowLedge)}
                        fullWidth
                        helperText={touched.KnowLedge && errors.KnowLedge}
                        label="Area conocimiento" //TODO
                        margin="normal"
                        name="KnowLedge"
                        inputRef={this.KnowLedge}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        type="text"
                        value={values.KnowLedge}
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