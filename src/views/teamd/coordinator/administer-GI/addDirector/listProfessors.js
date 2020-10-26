import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  makeStyles
} from '@material-ui/core';





export const  ListProfessors = ({professors}) => {
    

    const handleAdd = (isDirector) =>{
        if (!isDirector){
            return <button>Asignar</button>
        }

    }

    return (
        <Card
        >
        <PerfectScrollbar>
          <Box minWidth={1050}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    Nombre
                  </TableCell>
                  <TableCell>
                    Email
                  </TableCell>
                  <TableCell>
                    Edad
                  </TableCell>
                  <TableCell>
                    
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
              <TableRow
              hover
              key={professors.id}
            >{
                console.log(professors)
              }
              
              <TableCell>
                <Box
                  alignItems="center"
                  display="flex"
                >
                  <Typography
                    color="textPrimary"
                    variant="body1"
                  >
                    {professors.name}
                  </Typography>
                </Box>
              </TableCell>
              <TableCell>
                {professors.email}
              </TableCell>
              <TableCell>
                {professors.edad}
              </TableCell>
              <TableCell>
                  {
                    handleAdd(professors.isDirector)
                  }
            </TableCell>
            </TableRow>
              </TableBody>
            </Table>
          </Box>
        </PerfectScrollbar>
      </Card>
    )
}

export default ListProfessors;