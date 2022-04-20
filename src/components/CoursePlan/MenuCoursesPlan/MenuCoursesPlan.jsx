import React from 'react';
import MenuItems from '../../MenuItems/MenuItems';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';

import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import StoreIcon from '@mui/icons-material/Store';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import CampaignIcon from '@mui/icons-material/Campaign';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import { MenuBoxCoursePlan } from './MenuCoursesPlan.styled';
const createData = (icon, text, id, right) => {
  return { icon, text, id, right };
};

const items = [
  createData(<DashboardOutlinedIcon />, 'Informacje ogólne', 1, ''),
  createData(<VideoLibraryIcon />, 'Plan kursu', 2, '+icon'),
  createData(<StoreIcon />, 'Kursanci', 3, ''),
  createData(<GroupOutlinedIcon />, 'Statystyki', 4, ''),
  createData(<CampaignIcon />, 'Ustawienia', 5, ''),
  createData(<AccountBalanceWalletOutlinedIcon />, 'Wiadomości · ', 6, '2'),
  createData(<FolderOpenIcon />, 'Prace domowe · ', 7, '3'),
  createData(<FolderOpenIcon />, 'Wydarzenia', 8, ''),
];

const MenuCoursesPlan = () => {
  return (
    <>
      <MenuBoxCoursePlan>
        <List
          style={{
            padding: '0px',
            color: 'rgba(55, 71, 79, 1)',
            width: '260px',
            opacity: '1',
          }}
          component="nav"
          aria-label="mailbox folders"
        >
          <Divider />
          <MenuItems items={items} righttext={true} />
        </List>
      </MenuBoxCoursePlan>
    </>
  );
};

export default MenuCoursesPlan;
