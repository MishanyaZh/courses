import React, { useState } from 'react';

import Menu from '../../components/Courses/Menu/Menu';
import Main from '../../components/Courses/Main/Main';
import Messages from '../../components/Courses/Messages/Messages';
import ModalLatestNews from '../../components/Courses/ModalsCourses/ModalLatestNews/ModalLatestNews';

import { CoursesBox, DrawerS, IconButtonDr } from './Courses.styled';
import Header from '../../components/Courses/Header/Header';
import { MainBox } from '../CoursePlan/CoursePlan.styled';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const drawerWidth = 340;

const Courses = () => {
  const [openDrawer, setOpenDrawer] = useState(true);

  const handleDrawerOpen = () => {
    openDrawer ? setOpenDrawer(false) : setOpenDrawer(true);
  };
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <>
      <CoursesBox>
        <Header
          handleOpenModal={handleOpenModal}
          handleCloseModal={handleCloseModal}
        />
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
            {openDrawer ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButtonDr>
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
            open={openDrawer}
          >
            <Messages />
          </DrawerS>
        </MainBox>
        <ModalLatestNews
          handleCloseModal={handleCloseModal}
          openModal={openModal}
        />
      </CoursesBox>
    </>
  );
};

export default Courses;
