import React from 'react';

import MenuCoursesPlan from '../../components/CoursePlan/MenuCoursesPlan/MenuCoursesPlan';
import Header from '../../components/CoursePlan/Header/Header';
import Main from '../../components/CoursePlan/Main/Main';
import { Footer, FooterContent } from '../NewCourse/NewCourse.styled';
import { MainBox } from './CoursePlan.styled';
import { Divider } from '@mui/material';

const CoursePlan = () => {
  return (
    <>
      <Header />
      <MainBox>
        <MenuCoursesPlan />
        <Main />
      </MainBox>
      <Footer>
        <Divider style={{ marginLeft: '24px' }} />
        <FooterContent>
          <div>© Learning Space</div>
          <div>Regulamin · Polityka prywatności · Polityka plików cookies</div>
        </FooterContent>
      </Footer>
    </>
  );
};

export default CoursePlan;
