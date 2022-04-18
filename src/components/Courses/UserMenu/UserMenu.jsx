import { Avatar, Menu, MenuItem, Typography } from '@mui/material';
import React from 'react';
import { Autor, ExpandMoreIconStyled, Name } from './UserMenu.styled';
import jan from '../UserMenu/jan.svg';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const UserMenu = () => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <>
      <Autor>
        <Avatar alt="Remy Sharp" src={jan} />
        <Name>Jan Kowalski</Name>
        <ExpandMoreIconStyled
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
    </>
  );
};

export default UserMenu;
