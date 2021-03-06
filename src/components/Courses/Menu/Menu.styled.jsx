import styled from '@emotion/styled';

import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import { NavLink } from 'react-router-dom';

export const NavLinkStyled = styled(NavLink)`
  color: rgba(255, 255, 255, 0.72);
  text-decoration: none;
`;
export const ListItemStyled = styled(ListItem)`
  &:hover {
    color: rgba(0, 172, 193, 1);
    border-right: 4px solid #00acc1;
  }
`;
export const MenuBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100%;
  /* height: 1093px; */
  background-color: rgba(55, 71, 79, 1);
  color: rgba(255, 255, 255, 0.72);
`;

export const LogoTop = styled.img`
  height: 32px;
  width: 151px;
  margin: 24px 44px 0px 24px;
  cursor: pointer;
`;
export const LogoDown = styled.img`
  margin-right: 20px;
`;
