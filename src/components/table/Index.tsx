import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  name: string,
  biguacu: string,
  itajai:string,
  tangua:string,
  itauna: string,
  patos: string
) {
  return { name, biguacu, itajai, tangua, itauna, patos};
}

const rows = [
  createData('Umidade e substâncias voláteis (máx.)', '10%', '10%','10%', '10%', '10%'),
  createData('Proteína Bruta (mín.)', '55,0%', '55,0%', '55,0%', '55,0%', '55,0%'),
  createData('Extrato Etéreo (mín.)', '5,0%', '5,0%', '5,0%', '5,0%', '5,0%'),
  createData('Matéria Mineral (máx.)', '28,0%', '28,0%', '28,0%', '28,0%', '28,0%'),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell> <strong>Parâmetros</strong> </TableCell>
            <TableCell align="right"> <strong>Itaúna </strong> </TableCell>
            <TableCell align="right"> <strong> Patos de Minas</strong> </TableCell>
            <TableCell align="right"> <strong> Tanguá</strong> </TableCell>
            <TableCell align="right"> <strong>Biguaçu </strong> </TableCell>
            <TableCell align="right"> <strong> Itajaí</strong> </TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.itauna}</TableCell>
              <TableCell align="right">{row.patos}</TableCell>
              <TableCell align="right">{row.tangua}</TableCell>
              <TableCell align="right">{row.biguacu}</TableCell>
              <TableCell align="right">{row.itajai}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}