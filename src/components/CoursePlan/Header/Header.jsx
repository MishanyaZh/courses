import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  ArrowBack,
  Button,
  Subtitle,
} from '../../../views/NewCourse/NewCourse.styled';
import { ButtonColor, ButtonWhite } from '../../NewCourse/Upload/Upload.styled';
import { ButtonText } from '../MenuCoursesPlan/MenuCoursesPlan.styled';
import { Descriptions, HeaderBox } from './Header.styled';

const Header = () => {
  return (
    <>
      <HeaderBox>
        <NavLink style={{ padding: '0px' }} to="/">
          <Button
            style={{
              width: '260px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <ArrowBack style={{ marginLeft: '28px' }} />
            <ButtonText>Kursy</ButtonText>
          </Button>
        </NavLink>
        <Subtitle>UX Design od podstaw</Subtitle>
        <Descriptions>Zdobądź oznaczenie Smart Learning 󰋽 </Descriptions>
        <ButtonWhite variant="text">Podgląd</ButtonWhite>
        <ButtonColor style={{ marginRight: '24px' }} variant="contained">
          Publikuj
        </ButtonColor>
      </HeaderBox>
    </>
  );
};

export default Header;
