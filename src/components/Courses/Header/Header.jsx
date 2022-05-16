import React from 'react';
import {
  EmailIconStyled,
  NotificationsIconStyled,
  Title,
} from '../Main/Main.styled';
import { LogoTop } from '../Menu/Menu.styled';
import { Badge, Stack } from '@mui/material';
import { BoxLogo, BoxTitle, HeaderBox } from './Header.styled';
import logotyp from '../Header/logotyp.svg';

const Header = ({ handleOpenModal }) => {
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
          <Stack
            style={{ marginRight: '24px', cursor: 'pointer' }}
            spacing={3}
            direction="row"
            onClick={handleOpenModal}
          >
            <Badge badgeContent={2} margin-right={24} color="error">
              <EmailIconStyled />
            </Badge>
            <Badge badgeContent={6} color="error">
              <NotificationsIconStyled />
            </Badge>
          </Stack>
        </BoxTitle>
      </HeaderBox>
    </>
  );
};

export default Header;
