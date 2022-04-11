import React from 'react';
import {
  ActiveDiscussionList,
  TableCellItem,
  TableCellTitle,
  Titile,
} from './ActiveDiscussion.styled';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const createData = (title, list) => {
  return { title, list };
};

const rows = [
  createData('Metody badawcze', 24),
  createData('Metody badawcze', 18),
  createData('Metody badawcze', 16),
  createData('Metody badawcze', 10),
];

const ActiveDiscussion = () => {
  return (
    <>
      <ActiveDiscussionList>
        <Titile>Aktywne dyskusje</Titile>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCellTitle style={{ padding: '10px 0px 0px 0px' }}>
                tytuł
              </TableCellTitle>
              <TableCellTitle
                align="right"
                style={{ padding: '10px 0px 0px 0px' }}
              >
                lista postów
              </TableCellTitle>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow
                key={row.title}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCellItem
                  component="th"
                  scope="row"
                  style={{ padding: '10px 0px 13px 0px' }}
                >
                  {row.title}
                </TableCellItem>
                <TableCellItem
                  align="right"
                  style={{ padding: '10px 0px 13px 0px' }}
                >
                  {row.list}
                </TableCellItem>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </ActiveDiscussionList>
    </>
  );
};

export default ActiveDiscussion;
