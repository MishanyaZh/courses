import styled from '@emotion/styled';
import Paper from '@mui/material/Paper';

export const CardsBox = styled.div`
  margin-top: 32px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 24px;
`;

export const Chart = styled(Paper)`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: end;
  width: 653px;
  height: 400px;
  margin-right: 24px;
  padding: 24px 20px 24px 24px;
  box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.04);
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;
