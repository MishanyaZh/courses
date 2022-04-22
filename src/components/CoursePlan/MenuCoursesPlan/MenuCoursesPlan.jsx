import React from 'react';
import MenuItems from '../../MenuItems/MenuItems';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';

import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import TimelineIcon from '@mui/icons-material/Timeline';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';

import { MenuBoxCoursePlan } from './MenuCoursesPlan.styled';
const createData = (icon, text, id, right) => {
  return { icon, text, id, right };
};

const items = [
  createData(<InfoOutlinedIcon />, 'Informacje ogólne', 1, ''),
  createData(<AssignmentIcon />, 'Plan kursu', 2, <AddCircleOutlinedIcon />),
  createData(<PeopleOutlineOutlinedIcon />, 'Kursanci', 3, ''),
  createData(<TimelineIcon />, 'Statystyki', 4, ''),
  createData(<SettingsOutlinedIcon />, 'Ustawienia', 5, ''),
  createData(<ChatOutlinedIcon />, 'Wiadomości · ', 6, '2'),
  createData(<DescriptionOutlinedIcon />, 'Prace domowe · ', 7, '3'),
  createData(<EventOutlinedIcon />, 'Wydarzenia', 8, ''),
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
