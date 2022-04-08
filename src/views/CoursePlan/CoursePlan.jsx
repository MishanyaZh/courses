import React from 'react';

import MenuCoursesPlan from '../../components/CoursePlan/MenuCoursesPlan/MenuCoursesPlan';
import Header from '../../components/CoursePlan/Header/Header';
import Main from '../../components/CoursePlan/Main/Main';
import { MainBox } from './CoursePlan.styled';

const CoursePlan = () => {
  return (
    <>
      <Header />
      <MainBox>
        <MenuCoursesPlan />
        <Main />
      </MainBox>
    </>
  );
};

export default CoursePlan;
