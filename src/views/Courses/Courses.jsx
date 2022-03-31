import React from 'react';

import Menu from '../../components/Courses/Menu/Menu';
import Main from '../../components/Courses/Main/Main';
import Messages from '../../components/Courses/Messages/Messages';

import { CoursesBox } from './Courses.styled';

const Courses = () => {
  return (
    <>
      <CoursesBox>
        <Menu />
        <Main />
        <Messages />
      </CoursesBox>
    </>
  );
};

export default Courses;
