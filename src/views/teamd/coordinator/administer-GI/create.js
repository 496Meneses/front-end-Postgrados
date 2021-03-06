import React, {useState} from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import 'bootstrap/dist/css/bootstrap.min.css';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import {
  Box,
  Button,
  Container,
  TextField,

} from '@material-ui/core';
import {CreateGIApi} from './service';

const CreateView = () => {

  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [department, setdepartment] = useState("")
  const [category, setcategory] = useState("")

  //Manejadores formulario
  const handleChangeName = (event) =>{
    setname(event.target.value)
  }
  const handleChangeEmail = (event) =>{
    setemail(event.target.value)
  }
  const handleChangedepartment = (event) =>{
    setdepartment(event.target.value)
  }
  const handleChangeCategory = (e) =>{
    setcategory(e.target.value)
  }
  // envio de datos al backend
  const handleCreate = () => {
    CreateGIApi({

      "nombre": name,
      "categoria": category,
      "email": email,
      "fecha_fundacion": "2020/02/02",
      "institucion": department,
      
    }).then((result)=>{

      document.getElementById("contenedorGI").innerHTML="<div class='alert alert-success' role='alert'>Grupo de investigacion creado correctamente!</div>";


  }).catch(()=>{
      document.getElementById("contenedorGI").innerHTML="<div class='alert alert-danger' role='alert'>Error!.Verifica los datos!</div>";
  });
  
  }
  const handleSubmit =(event) => {
    handleCreate();
    event.preventDefault();
  }
  return (
      <Container maxWidth="lg">
        <Formik
          initialValues={{
            name: '',
            email: '',
            department: '',
            fundationDate: '',
            category: ''
          }}
          validationSchema={
                        Yup.object().shape({
                          email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
                          name: Yup.string().max(255).required('Name is required'),
                          department: Yup.string().max(255).required('department name is required'),
                          fundationDate: Yup.string().max(255).required('FundationDate is required'),
                        })
                      }

        >
          {({
            errors,
            handleBlur,
            handleChange,
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
              <Typography
                color="textPrimary"
                variant="h6"
                mb={10}>
                Crear Grupo de investigacion
              </Typography>
              <form onSubmit={handleSubmit}>
                <Box mb={3}>
                  <TextField
                    error={Boolean(touched.name && errors.name)}
                    fullWidth
                    helperText={touched.name && errors.name}
                    label="Nombre"
                    name="name"
                    margin="normal"
                    onBlur={handleBlur}
                    onChange={ (e) => {handleChange(e); handleChangeName(e)}}
                    type="text"
                    value={values.name}
                    variant="outlined"
                    required
                  />
                  <TextField
                    error={Boolean(touched.email && errors.email)}
                    fullWidth
                    helperText={touched.email && errors.email}
                    label="Email"
                    name="email"
                    margin="normal"
                    onBlur={handleBlur}
                    onChange={ (e) => {handleChange(e); handleChangeEmail(e)}}
                    type="email"
                    value={values.email}
                    variant="outlined"
                    required
                  />
                  <TextField
                    error={Boolean(touched.department && errors.department)}
                    fullWidth
                    helperText={touched.department && errors.department}
                    label="Departamento de la institucion"

                    name="department"
                    margin="normal"
                    onBlur={handleBlur}
                    onChange={ (e) => {handleChange(e); handleChangedepartment(e)}}
                    type="text"
                    value={values.department}
                    variant="outlined"
                    required
                  />
                  {/* input para institucion */}
                  {/* <TextField
                    error={Boolean(touched.institution && errors.institution)}
                    fullWidth
                    helperText={touched.institution && errors.institution}
                    label="Institución"
                    margin="normal"
                    name="institution"
                  
                    onBlur={handleBlur}
                    onChange={ (e) => {handleChange(e); handleChangeInstitution(e)}}
                    type="text"
                    value={values.institution}
                    variant="outlined"
                  /> */}
                  <Typography
                     color="textPrimary"
                     variant="h6"
                      mb={10}>
                      Categoria
                  </Typography>
                  <Select
                    labelId="helperLabel"
                    id="select-category"
                    fullWidth
                    
                    value = {category}
                    onChange={handleChangeCategory}
                    required
                  >
                    <MenuItem value="A">A</MenuItem>
                    <MenuItem value="B">B</MenuItem>
                    <MenuItem value="C">C</MenuItem>
                  </Select>
                  <Typography
                     color="textPrimary"
                     variant="h6"
                      mb={10}>
                      
                      Fecha de su fundación
                  </Typography>

                  <TextField
                          id="dateGI"
                          type="date"
                          defaultValue="2020-01-01"
                          InputLabelProps={{
                            shrink: true,
                          }}
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
            <div id="contenedorGI">

            </div>
            </>
          )}
        </Formik>
      </Container>

    );
}

export default CreateView;

