import React from 'react';
import {
  MenuBox,
  ListItemStyled,
  LogoDown,
  NavLinkStyled,
} from './Menu.styled';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import StoreIcon from '@mui/icons-material/Store';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import CampaignIcon from '@mui/icons-material/Campaign';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import OutputIcon from '@mui/icons-material/Output';

import logodown from '../Menu/logodown.svg';

const createData = (icon, text, id) => {
  return { icon, text, id };
};

const items = [
  createData(<DashboardOutlinedIcon sx={{ mr: '28px' }} />, 'Dashboad', 1),
  createData(<VideoLibraryIcon sx={{ mr: '28px' }} />, 'Kursy', 2),
  createData(<StoreIcon sx={{ mr: '28px' }} />, 'Produkty', 3),
  createData(<GroupOutlinedIcon sx={{ mr: '28px' }} />, 'Użytkownicy', 4),
  createData(<CampaignIcon sx={{ mr: '28px' }} />, 'Marketing', 5),
  createData(
    <AccountBalanceWalletOutlinedIcon sx={{ mr: '28px' }} />,
    'Sprzedaż',
    6,
  ),
  createData(<FolderOpenIcon sx={{ mr: '28px' }} />, 'Repozytorium', 7),
];

const Menu = () => {
  return (
    <>
      <MenuBox>
        <List
          style={{ width: '260px', paddingTop: '0px' }}
          component="nav"
          aria-label="mailbox folders"
        >
          <Divider />
          {items.map(item => (
            <NavLinkStyled to="/courseplan">
              <ListItemStyled key={item.id} button>
                {item.icon}
                <ListItemText primary={item.text} />
              </ListItemStyled>
            </NavLinkStyled>
          ))}
        </List>

        <List>
          <ListItemStyled button>
            <OutputIcon sx={{ fontSize: 24, mr: '28px' }} />
            <ListItemText primary="Wyloguj" />
          </ListItemStyled>

          <ListItemStyled button>
            <LogoDown src={logodown} alt="logo" />
            <ListItemText primary="Nazwa firmy" />
          </ListItemStyled>
        </List>
      </MenuBox>
    </>
  );
};

export default Menu;
