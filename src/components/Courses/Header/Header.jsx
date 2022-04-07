import React from 'react';
import {
  EmailIconStyled,
  NotificationsIconStyled,
  Title,
} from '../Main/Main.styled';
import { LogoTop } from '../Menu/Menu.styled';
import { Avatar, Badge, Stack } from '@mui/material';
import { Autor, Name, SelectStyled } from '../Messages/Messages.styled';
import { BoxLogo, BoxTitle, HeaderBox } from './Header.styled';
import logotyp from '../Header/logotyp.svg';
import jan from '../Header/jan.svg';

const Header = () => {
  return (
    <>
      <HeaderBox>
        <BoxLogo>
          <LogoTop src={logotyp} alt="logo" />
        </BoxLogo>
        <BoxTitle>
          <Title display={'block'} variant="h2" fontSize={36}>
            Kursy
          </Title>
          <Stack style={{ marginRight: '24px' }} spacing={3} direction="row">
            <Badge badgeContent={2} margin-right={24} color="error">
              <EmailIconStyled />
            </Badge>
            <Badge badgeContent={6} color="error">
              <NotificationsIconStyled />
            </Badge>
          </Stack>
        </BoxTitle>
        <Autor>
          <Avatar alt="Remy Sharp" src={jan} style={{ cursor: 'pointer' }} />
          <Name>Jan Kowalski</Name>
          <SelectStyled style={{ cursor: 'pointer' }} />
        </Autor>
      </HeaderBox>
    </>
  );
};

export default Header;
