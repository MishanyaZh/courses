import styled from '@emotion/styled';
import Paper from '@mui/material/Paper';
import TableCell from '@mui/material/TableCell';

export const ActiveDiscussionList = styled(Paper)`
  min-width: 427px;
  height: 268px;
  margin-right: 24px;
  padding: 24px;
  box-sizing: border-box;
  box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.04);
`;

export const Titile = styled.div`
  text-align: left;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.22;
  margin-bottom: 13px;

  color: #242424;
`;

export const TableCellTitle = styled(TableCell)`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.25;

  color: #78909c;
`;
export const TableCellItem = styled(TableCell)`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.21;

  color: #37474f;
`;
