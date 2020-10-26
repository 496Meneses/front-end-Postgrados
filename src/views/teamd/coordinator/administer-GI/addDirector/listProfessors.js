import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography
} from '@material-ui/core';





export const  ListProfessors = ({professors,filterBy}) => {
    

    const handleAdd = (isDirector) =>{
        if (!isDirector){
            return <button>Asignar</button>
        }else{
          return <button disabled>Asignar</button>
        }

    }
    const list = () =>{
      if (filterBy!=" "){
        return professors.map ( 
          (i) => {

            if (i.name.toLowerCase().search(filterBy.toLowerCase()) > -1){
             
            return(  
              <TableRow
              hover
              key={i.id}
            >
                    <TableCell>
                    <Box
                      alignItems="center"
                      display="flex"
                    >
                      <Typography
                        color="textPrimary"
                        variant="body1"
                        
                      >
                        {i.name}
                      </Typography>
                      </Box>
                    </TableCell>
                    <TableCell>
                      {i.email}
                    </TableCell>
                    <TableCell>
                      {i.edad}
                    </TableCell>
                    <TableCell>
                        {
                          handleAdd(i.isDirector)
                        }
                  </TableCell>
            </TableRow>
            )
          }
        }
        )
      }else{
        return professors.map ( 
          (i) => {
            return(  
              <TableRow
              hover
              key={i.id}
            >
                    <TableCell>
                    <Box
                      alignItems="center"
                      display="flex"
                    >
                      <Typography
                        color="textPrimary"
                        variant="body1"
                        
                      >
                        {i.name}
                      </Typography>
                      </Box>
                    </TableCell>
                    <TableCell>
                      {i.email}
                    </TableCell>
                    <TableCell>
                      {i.edad}
                    </TableCell>
                    <TableCell>
                        {
                          handleAdd(i.isDirector)
                        }
                  </TableCell>
            </TableRow>
            )
          }
        )
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
                {list()}
              </TableBody>
            </Table>
          </Box>
        </PerfectScrollbar>
      </Card>
    )
}

export default ListProfessors;