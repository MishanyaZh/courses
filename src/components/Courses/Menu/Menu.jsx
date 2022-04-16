import React from 'react';
import { MenuBox, ListItemStyled, LogoDown } from './Menu.styled';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import MenuItems from '../../MenuItems/MenuItems';

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
  createData(<DashboardOutlinedIcon />, 'Dashboad', 1),
  createData(<VideoLibraryIcon />, 'Kursy', 2),
  createData(<StoreIcon />, 'Produkty', 3),
  createData(<GroupOutlinedIcon />, 'Użytkownicy', 4),
  createData(<CampaignIcon />, 'Marketing', 5),
  createData(<AccountBalanceWalletOutlinedIcon />, 'Sprzedaż', 6),
  createData(<FolderOpenIcon />, 'Repozytorium', 7),
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
          <MenuItems items={items} />
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
