import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import service from 'src/views/teamb/activities/service';


import {

  Grid,
  Select,
  TextField,
  MenuItem
} from '@material-ui/core';
import { render } from 'nprogress';

const ObtPeriodo = new service();
const states = [

  {
    value: 'advert',
    label: 'Seleccione una opción'
  },
  {
    value: 'T1',
    label: 'Curso, dirección/revisión de proyectos'
  },
  {
    value: 'T2',
    label: 'Ponencias en congresos, simposios y/o jornadas'
  },
  {
    value: 'T3',
    label: 'Publicaciones'
  },
  {
    value: 'T4',
    label: 'Exposición de resultados parciales de investigación'
  },
  {
    value: 'T5',
    label: 'Estancias de investigación en otras instituciones:'
  },
  {
    value: 'T6',
    label: 'participación en proyectos de investigación'
  }
];

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});



const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);



const ActivityView = ({ className, ...rest }) => {
  const refPeriodo = React.createRef();
  const [open, setOpen] = React.useState(false);
  const [activity, setActivity] = React.useState("");

  const changeActivityType = (e) => {
    setActivity(e)
  }

  const [values, setValues] = useState({

  });
  /*const TypesForm = () => {
    const selected = document.getElementById("tipo").value;
    
    switch(selected){
      case 'T1':
        render(){
          return <div>Esto</div>;
          
        }

      break;
    default:
      break;
    }
     

  }*/
  const handleClickOpen = () => {
    ObtPeriodo.ObtPeriodoService({ "periodo": refPeriodo }).then((result) => {
      var periodoActual = result.data[0].periodo_matricula;
      alert("El periodo actual es " + periodoActual);
      document.getElementById("periodoAct").textContent = "Periodo " + periodoActual;
    }).catch(() => {
      alert("Error");
    });
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };


  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        CREAR ACTIVIDAD
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <br></br>
        <h1 style={{ display: 'flex', justifyContent: 'center' }}>Crear actividad</h1>
        <br></br>
        <label ref={refPeriodo} style={{ display: 'flex', justifyContent: 'center' }} id="periodoAct" title="periodo">  </label>
        <br></br>
        <DialogContent dividers>

          <Grid
            item

            xs={12}
          >
            <label>Tipo de actividad:</label>
            <Select
              fullWidth
              label="Tipo de actividad"
              id="activity-type"
              variant="outlined"
              type="select"
              defaultValue={""}
              onChange={e => changeActivityType(e.target.value)  }

            >
              <MenuItem value={'activityone'}>Curso, dirección/revisión de proyectos</MenuItem>
              <MenuItem value={'activitytwo'}>Ponencias en congresos, simposios y/o jornadas</MenuItem>
              <MenuItem value={'activitythree'}>Publicaciones</MenuItem>
              <MenuItem value={'activityfour'}>Exposición de resultados parciales de investigación</MenuItem>
              <MenuItem value={'activityfive'}>Estancias de investigación en otras instituciones</MenuItem>
              <MenuItem value={'activitysix'}>participación en proyectos de investigación</MenuItem>
            </Select>
            

            
          </Grid>


          <Grid

            item

            xs={12}
          >

            <TextField
              fullWidth
              label="Descripción"
              name="descripcion"
              onChange={handleChange}
              required
              value={values.Descripcion}
              variant="outlined"
            />
          </Grid>

        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="secondary">
            Cancelar
          </Button>
          <RouterLink to={activity}>
            <Button variant="contained" color="primary">
              Datos de detalle
            </Button>
          </RouterLink>
        </DialogActions>
      </Dialog>
    </div>
  );
};

ActivityView.propTypes = {
  className: PropTypes.string
};

export default ActivityView;