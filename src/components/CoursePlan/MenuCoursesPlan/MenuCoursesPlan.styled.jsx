import styled from '@emotion/styled';
import menu from '../MenuCoursesPlan/menu.png';

export const ButtonText = styled.span`
  font-family: 'Montserrat';
  margin-left: 28px;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.2;
  color: #ffffff;
`;

export const MenuBoxCoursePlan = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  background-blend-mode: multiply;
  background-color: rgba(176, 190, 197, 0.5);
  background-image: url(${menu});
  background-repeat: no-repeat;
  background-position: left 10px top 1087px;
`;
