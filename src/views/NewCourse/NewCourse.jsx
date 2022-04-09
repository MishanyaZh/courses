import React from 'react';
import BreadcrumbsComponent from '../../components/NewCourse/Breadcrumbs/BreadcrumbsComponent';
import Form from '../../components/NewCourse/Form/Form';
import FooterComponent from '../../components/Footer/FooterComponent';
import { NavLink } from 'react-router-dom';
import {
  ArrowBack,
  BoxMaim,
  Button,
  Header,
  Maim,
  NewCourseBox,
  Subtitle,
} from './NewCourse.styled';

import { newCourseBread } from '../../assets/breadcrumbsData';

const NewCourse = () => {
  return (
    <>
      <NewCourseBox>
        <Header>
          <NavLink to="/">
            <Button>
              <ArrowBack />
            </Button>
          </NavLink>
          <Subtitle>Dodaj nowy kurs</Subtitle>
        </Header>
        <Maim>
          <BoxMaim>
            <BreadcrumbsComponent
              breadData={newCourseBread}
              curent={'Dodaj nowy kurs'}
            />
            <Form />
          </BoxMaim>
        </Maim>
        <FooterComponent />
      </NewCourseBox>
    </>
  );
};

export default NewCourse;
