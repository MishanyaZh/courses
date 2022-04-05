import React from 'react';
import {
  MenuBox,
  ListItemStyled,
  NavLinkStyled,
} from '../../Courses/Menu/Menu.styled';
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

const MenuCoursesPlan = () => {
  return (
    <>
      <MenuBox style={{ background: '#B0BEC5' }}>
        <List
          style={{ padding: '0px', color: 'rgba(55, 71, 79, 1)' }}
          component="nav"
          aria-label="mailbox folders"
        >
          <Divider />
          <ListItemStyled button>
            <DashboardOutlinedIcon sx={{ fontSize: 24, mr: '28px' }} />
            <ListItemText primary="Informacje ogólne" />
          </ListItemStyled>

          <NavLinkStyled to="/courseplan">
            <ListItemStyled button style={{ color: 'rgba(0, 172, 193, 1)' }}>
              <VideoLibraryIcon sx={{ fontSize: 24, mr: '28px' }} />
              <ListItemText primary="Plan kursu" />
            </ListItemStyled>
          </NavLinkStyled>

          <ListItemStyled button>
            <StoreIcon sx={{ fontSize: 24, mr: '28px' }} />
            <ListItemText primary="Kursanci" />
          </ListItemStyled>
          <ListItemStyled button>
            <GroupOutlinedIcon sx={{ fontSize: 24, mr: '28px' }} />
            <ListItemText primary="Statystyki" />
          </ListItemStyled>
          <ListItemStyled button>
            <CampaignIcon sx={{ fontSize: 24, mr: '28px' }} />
            <ListItemText primary="Ustawienia" />
          </ListItemStyled>
          <ListItemStyled button>
            <AccountBalanceWalletOutlinedIcon
              sx={{ fontSize: 24, mr: '28px' }}
            />
            <ListItemText primary="Wiadomości · 2" />
          </ListItemStyled>
          <ListItemStyled button>
            <FolderOpenIcon sx={{ fontSize: 24, mr: '28px' }} />
            <ListItemText primary="Prace domowe · 3" />
          </ListItemStyled>
          <ListItemStyled button>
            <FolderOpenIcon sx={{ fontSize: 24, mr: '28px' }} />
            <ListItemText primary="Wydarzenia" />
          </ListItemStyled>
        </List>
      </MenuBox>
    </>
  );
};

export default MenuCoursesPlan;
