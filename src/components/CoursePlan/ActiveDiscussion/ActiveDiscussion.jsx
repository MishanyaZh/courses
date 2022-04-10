import React from 'react';
import { ActiveDiscussionList, Titile } from './ActiveDiscussion.styled';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const createData = (title, list) => {
  return { title, list };
};

const rows = [
  createData('Frozen yoghurt', 24),
  createData('Ice cream sandwich', 18),
  createData('Eclair', 16),
  createData('Cupcake', 10),
];

const ActiveDiscussion = () => {
  return (
    <>
      <ActiveDiscussionList>
        <Titile>Aktywne dyskusje</Titile>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell
                style={{ padding: '10px 0px 0px 0px', fontSize: '12px' }}
              >
                tytuł
              </TableCell>
              <TableCell
                align="right"
                style={{ padding: '10px 0px 0px 0px', fontSize: '12px' }}
              >
                lista postów
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow
                key={row.title}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  style={{ padding: '10px 0px 13px 0px', fontSize: '14px' }}
                >
                  {row.title}
                </TableCell>
                <TableCell
                  align="right"
                  style={{ padding: '10px 0px 13px 0px', fontSize: '14px' }}
                >
                  {row.list}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </ActiveDiscussionList>
    </>
  );
};

export default ActiveDiscussion;
