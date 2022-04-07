import React from 'react';

import Menu from '../../components/Courses/Menu/Menu';
import Main from '../../components/Courses/Main/Main';
import Messages from '../../components/Courses/Messages/Messages';

import { CoursesBox } from './Courses.styled';
import Header from '../../components/Courses/Header/Header';
import { MainBox } from '../CoursePlan/CoursePlan.styled';

const Courses = () => {
  return (
    <>
      <CoursesBox>
        <Header />
        <MainBox>
          <Menu />
          <Main />
          <Messages />
        </MainBox>
      </CoursesBox>
    </>
  );
};

export default Courses;
