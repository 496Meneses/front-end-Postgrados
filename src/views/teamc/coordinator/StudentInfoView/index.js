import React, { useState, useEffect } from 'react';

import api from 'src/views/teamc/services/Api';
import Page from 'src/components/Page';

import { makeStyles,Typography } from '@material-ui/core';

import ActivityList from './ActivityList';
import BreadCrumbs from './BreadCrumbs';
import StudentInfo from './StudentInfo';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(1),
    paddingLeft: theme.spacing(1)      
  },
  title: {
    textAlign: 'center',
    margin: '20px'
  }
}));

const StudentView = () => {
  const classes = useStyles();
  const [activityList, setActivityList] = useState([]);
  const [result, setResult] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const res = await api.getStudentActivitiesLocal();
      /*if (res.status === 200) {
        setResult('ok');
        setActivityList(res.data);
      } else if (res.status === 500) {
        setResult('error');
      }*/
      setResult('ok');
      setActivityList(res);
    };
    fetchData();
  }, []);

  return (
    <>
    <Page className={classes.root} title="Estudiante">
      {/* BreadCrumbs */}
      <BreadCrumbs />
      {/* Student Basic Info
          - Nombre, programa, cohorte*/}
      <StudentInfo />
      {/* Button Track Student */}
      {/* Activity Card List */}
      {result === 'ok' ? (
        <>
          <Typography className={classes.title} variant='h1'>
            Actividades de investigación del estudiante
          </Typography>
          <ActivityList activityList={activityList} />
        </>
      ) : (
        <h1> Free accounts are limited to 200 requests per day. </h1>
      )}
      </Page>
    </>
  );
};

export default StudentView;
