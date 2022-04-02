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
  background-color: rgba(55, 71, 79, 1);
  max-width: 260px;

  width: 100%;
  min-height: 100vh;
  max-height: 1010px;
  font-size: '14px';
  color: rgba(255, 255, 255, 0.72);
`;
export const LogoTop = styled.img`
  height: 32px;
  width: 151px;
  margin: 16px 44px 16px 24px;
  cursor: pointer;
`;
export const LogoDown = styled.img`
  margin-right: 20px;
`;
