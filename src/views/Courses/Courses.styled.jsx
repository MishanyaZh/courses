import styled from '@emotion/styled';

import { IconButton } from '@mui/material';
import { Drawer } from '@mui/material';

export const IconButtonDr = styled(IconButton)`
  z-index: 2000;
  position: absolute;
  right: 0%;
  top: 50%;
  width: 32px;
  height: 32px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.16);
`;

export const CoursesBox = styled.div`
  position: relative;
  max-width: 1366px;
  width: 1066px;
  display: flex;
  flex-direction: column;
  background: 'rgba(245, 247, 248, 0.6)';
`;

export const DrawerS = styled(Drawer)`
  & .css-18sg6k4-MuiPaper-root-MuiDrawer-paper {
    position: fixed;
    right: 15px;
  }
`;
