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

export const SoldCourses = styled(Paper)`
  width: 201px;
  height: 180px;
  margin-right: 24px;
`;

export const Rating = styled(Paper)`
  width: 427px;
  height: 180px;
  margin-right: 24px;
`;
export const Chart = styled(Paper)`
  width: 653px;
  height: 400px;
  margin-right: 24px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Statistic = styled(Paper)`
  width: 201px;
  height: 118px;
  margin-bottom: 24px;
  &:last-child {
    margin-bottom: 0px;
  }
`;
export const Progress = styled(Paper)`
  width: 427px;
  height: 268px;
  margin-right: 24px;
`;
