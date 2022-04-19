import React, { useState } from 'react';

import Menu from '../../components/Courses/Menu/Menu';
import Main from '../../components/Courses/Main/Main';
import Messages from '../../components/Courses/Messages/Messages';

import { CoursesBox, DrawerS, IconButtonDr } from './Courses.styled';
import Header from '../../components/Courses/Header/Header';
import { MainBox } from '../CoursePlan/CoursePlan.styled';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const drawerWidth = 340;

const Courses = () => {
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    open ? setOpen(false) : setOpen(true);
  };
  return (
    <>
      <CoursesBox>
        <Header handleDrawerOpen={handleDrawerOpen} />
        <MainBox>
          <Menu />
          <Main />
          <IconButtonDr
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            style={{ width: '32px', height: '32px' }}
          >
            <ChevronRightIcon />
          </IconButtonDr>
        </MainBox>
        <DrawerS
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
            },
          }}
          variant="persistent"
          anchor="right"
          open={open}
        >
          <Messages />
        </DrawerS>
      </CoursesBox>
    </>
  );
};

export default Courses;
