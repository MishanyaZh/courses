import React from 'react';
import {
  EmailIconStyled,
  NotificationsIconStyled,
  Title,
} from '../Main/Main.styled';
import { LogoTop } from '../Menu/Menu.styled';
import {
  Avatar,
  Badge,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from '@mui/material';
import { Autor, Name, SelectStyled } from '../Messages/Messages.styled';
import { BoxLogo, BoxTitle, HeaderBox } from './Header.styled';
import logotyp from '../Header/logotyp.svg';
import jan from '../Header/jan.svg';
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Header = () => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

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
          <Avatar alt="Remy Sharp" src={jan} />
          <Name>Jan Kowalski</Name>
          <SelectStyled
            onClick={handleOpenUserMenu}
            style={{ cursor: 'pointer' }}
          />
          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map(setting => (
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Autor>
      </HeaderBox>
    </>
  );
};

export default Header;
