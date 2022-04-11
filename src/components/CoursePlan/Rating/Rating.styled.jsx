import styled from '@emotion/styled';
import Paper from '@mui/material/Paper';

export const RatingBox = styled(Paper)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  box-sizing: border-box;
  min-width: 427px;
  height: 180px;
  margin-right: 24px;
  padding: 24px;
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
`;
