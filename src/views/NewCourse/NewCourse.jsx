import React from 'react';
import Divider from '@mui/material/Divider';
import BreadcrumbsComponent from '../../components/NewCourse/Breadcrumbs/BreadcrumbsComponent';
import Form from '../../components/NewCourse/Form/Form';
import { NavLink } from 'react-router-dom';
import {
  ArrowBack,
  BoxMaim,
  Button,
  Footer,
  FooterContent,
  Header,
  Maim,
  NewCourseBox,
  Subtitle,
} from './NewCourse.styled';

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
            <BreadcrumbsComponent />
            <Form />
          </BoxMaim>
        </Maim>
        <Footer>
          <Divider style={{ marginLeft: '24px' }} />
          <FooterContent>
            <div>© Learning Space</div>
            <div>
              Regulamin · Polityka prywatności · Polityka plików cookies
            </div>
          </FooterContent>
        </Footer>
      </NewCourseBox>
    </>
  );
};

export default NewCourse;
