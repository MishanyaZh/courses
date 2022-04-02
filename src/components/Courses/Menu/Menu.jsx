import React from 'react';
import {
  MenuBox,
  ListItemStyled,
  LogoTop,
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
import logotyp from '../Menu/logotyp.svg';

const Menu = () => {
  return (
    <>
      <MenuBox>
        <List component="nav" aria-label="mailbox folders">
          <LogoTop src={logotyp} alt="logo" />
          <Divider />

          <ListItemStyled button>
            <DashboardOutlinedIcon sx={{ fontSize: 24, mr: '28px' }} />
            <ListItemText primary="Dashboad" />
          </ListItemStyled>

          <NavLinkStyled to="/courseplan">
            <ListItemStyled button>
              <VideoLibraryIcon sx={{ fontSize: 24, mr: '28px' }} />
              <ListItemText primary="Kursy" />
            </ListItemStyled>
          </NavLinkStyled>

          <ListItemStyled button>
            <StoreIcon sx={{ fontSize: 24, mr: '28px' }} />
            <ListItemText primary="Produkty" />
          </ListItemStyled>
          <ListItemStyled button>
            <GroupOutlinedIcon sx={{ fontSize: 24, mr: '28px' }} />
            <ListItemText primary="Użytkownicy" />
          </ListItemStyled>
          <ListItemStyled button>
            <CampaignIcon sx={{ fontSize: 24, mr: '28px' }} />
            <ListItemText primary="Marketing" />
          </ListItemStyled>
          <ListItemStyled button>
            <AccountBalanceWalletOutlinedIcon
              sx={{ fontSize: 24, mr: '28px' }}
            />
            <ListItemText primary="Sprzedaż" />
          </ListItemStyled>
          <ListItemStyled button>
            <FolderOpenIcon sx={{ fontSize: 24, mr: '28px' }} />
            <ListItemText primary="Repozytorium" />
          </ListItemStyled>
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
