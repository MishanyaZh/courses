import React from 'react';
import YourCourses from '../YourCourses/YourCourses';
import {
  BoxHeaderStyled,
  ButtonStyled,
  Logobutton,
  NavLinkStyled,
  Subtitle,
} from './Main.styled';

import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';

import addCurse from '../Main/plus.svg';

const Main = () => {
  return (
    <>
      <Container
        fixed
        style={{
          width: '806px',
          paddingBottom: '20px',
          background: 'rgba(245, 247, 248, 0.6)',
        }}
      >
        <Divider />
        <BoxHeaderStyled>
          <Subtitle>Twoje kursy</Subtitle>
          <NavLinkStyled to="newcourse">
            <ButtonStyled variant="contained">
              <Logobutton src={addCurse} alt="logo" /> Dodaj kurs
            </ButtonStyled>
          </NavLinkStyled>
        </BoxHeaderStyled>
        <YourCourses />
        <Divider />
      </Container>
    </>
  );
};

export default Main;
