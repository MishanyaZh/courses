import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Button from '@mui/material/Button';

export const Title = styled(Typography)`
  margin: 18px 0px 18px 24px;
  color: #37474f;
  font-style: normal;
  font-weight: 800;
`;

export const BoxHeaderStyled = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const EmailIconStyled = styled(EmailIcon)`
  fill: rgba(55, 71, 79, 1);
`;
export const NotificationsIconStyled = styled(NotificationsIcon)`
  fill: rgba(55, 71, 79, 1);
`;

export const Subtitle = styled(Typography)`
  margin: 25px 0px 6px 0px;
  color: #37474f;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 1.2;
`;

export const ButtonStyled = styled(Button)`
  width: 156px;
  height: 40px;
  margin-top: 20px;
  background-color: rgba(0, 172, 193, 1);
  color: rgba(255, 255, 255, 1);
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.2;
  border-radius: 40px;
`;
export const Logobutton = styled.img`
  height: 16px;
  width: 16px;
  margin-right: 8px;
`;

export const NavLinkStyled = styled(NavLink)`
  color: rgba(255, 255, 255, 1);
  text-decoration: none;
`;

export const SubtitleBox = styled.div``;
