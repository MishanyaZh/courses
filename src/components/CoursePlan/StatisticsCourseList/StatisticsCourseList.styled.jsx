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
  box-sizing: border-box;
  padding: 24px;
  position: relative;
  width: 201px;
  height: 180px;
  margin-right: 24px;
  background-repeat: no-repeat;
  background-image: ${props => `url(${props.props})`};
  background-position: left 0px top 100px;
`;

export const Amount = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 1.2;
  color: #37474f;
`;
export const SoldCoursesText = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  margin-bottom: 65px;
  color: #78909c;
`;
export const SoldCoursesToday = styled.div`
  display: flex;
  align-items: center;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1;
  color: ${props => (props.props === 'green' ? '#4CC500' : '#FF4081')};
`;

export const Rating = styled(Paper)`
  width: 427px;
  height: 180px;
  margin-right: 24px;
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
`;

export const ChartDescription = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const Description = styled.div`
  display: flex;
  flex-direction: column;
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
