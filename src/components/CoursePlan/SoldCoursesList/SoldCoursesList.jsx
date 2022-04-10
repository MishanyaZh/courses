import React from 'react';

import NorthEastIcon from '@mui/icons-material/NorthEast';
import SouthEastIcon from '@mui/icons-material/SouthEast';

import green from '../SoldCoursesList/green.jpg';
import pink from '../SoldCoursesList/pink.jpg';
import {
  Amount,
  SoldCourses,
  SoldCoursesText,
  SoldCoursesToday,
} from './SoldCoursesList.styled';

const SoldCoursesList = () => {
  return (
    <>
      <SoldCourses props={green}>
        <Amount>693</Amount>
        <SoldCoursesText>sprzedanych kursów</SoldCoursesText>
        <SoldCoursesToday props={'green'}>
          <NorthEastIcon style={{ height: '18px' }} /> 3 dzisiaj
        </SoldCoursesToday>
      </SoldCourses>
      <SoldCourses props={pink}>
        <Amount>396</Amount>
        <SoldCoursesText>sprzedanych kursów</SoldCoursesText>
        <SoldCoursesToday props={'pink'}>
          <SouthEastIcon style={{ height: '18px' }} /> 3 dzisiaj
        </SoldCoursesToday>
      </SoldCourses>
    </>
  );
};

export default SoldCoursesList;
