import React from 'react';
import YourCourses from '../YourCourses/YourCourses';
import {
  BoxHeaderStyled,
  ButtonStyled,
  EmailIconStyled,
  Logobutton,
  NavLinkStyled,
  NotificationsIconStyled,
  Subtitle,
  Title,
} from './Main.styled';

import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import { Badge, Stack } from '@mui/material';

import addCurse from '../Main/plus.svg';

const Main = () => {
  return (
    <>
      <Container fixed style={{ maxWidth: '806px' }}>
        <BoxHeaderStyled>
          <Title align="left" variant="h2" fontSize={36}>
            Kursy
          </Title>
          <Stack spacing={3} direction="row">
            <Badge badgeContent={2} margin-right={24} color="error">
              <EmailIconStyled />
            </Badge>
            <Badge badgeContent={6} color="error">
              <NotificationsIconStyled />
            </Badge>
          </Stack>
        </BoxHeaderStyled>
        <Divider />

        <BoxHeaderStyled>
          <Subtitle>Twoje kursy</Subtitle>
          <NavLinkStyled to="/newcourse">
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
