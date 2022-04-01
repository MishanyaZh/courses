import React from 'react';
import { MenuBox } from './Menu.styled';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';

const style = {
  width: '100%',
  maxWidth: 260,
  fontSize: '14',
  bgcolor: 'rgba(55, 71, 79, 1)',
  color: 'rgba(255, 255, 255, 0.72)',
};

const Menu = () => {
  return (
    <>
      <Box sx={style}>
        <Typography variant="h4" component="div">
          logo
        </Typography>
        <Divider />
        <List sx={style} component="nav" aria-label="mailbox folders">
          <ListItem button>
            <DashboardOutlinedIcon sx={{ fontSize: 24 }} />
            <ListItemText primary="Dashboad" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Kursy" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Produkty" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Użytkownicy" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Marketing" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Sprzedaż" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Repozytorium" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Wyloguj" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Nazwa firmy" />
          </ListItem>
        </List>
      </Box>
    </>
  );
};

export default Menu;
