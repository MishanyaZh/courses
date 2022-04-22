import styled from '@emotion/styled';

import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { NavLink } from 'react-router-dom';

export const ListItemTextS = styled(ListItemText)`
  margin-left: 28px;

  & span {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 1.8;
  }
`;
export const NavLinkStyled = styled(NavLink)`
  color: inherit;
  text-decoration: none;
`;
export const ListItemStyled = styled(ListItem)`
  margin-top: 10px;
  &:hover {
    color: rgba(0, 172, 193, 1);
    border-right: 4px solid #00acc1;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const Notification = styled.div`
  margin-left: 8px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.2;
  color: rgba(0, 172, 193, 1);
`;
