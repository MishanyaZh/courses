import styled from '@emotion/styled';
import Paper from '@mui/material/Paper';

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
  box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.04);
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
