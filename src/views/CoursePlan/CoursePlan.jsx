import React from 'react';

import { CoursesBox } from '../Courses/Courses.styled';
import MenuCoursesPlan from '../../components/CoursePlan/MenuCoursesPlan/MenuCoursesPlan';

const CoursePlan = () => {
  return (
    <>
      <CoursesBox>
        <MenuCoursesPlan />
      </CoursesBox>
    </>
  );
};

export default CoursePlan;
