import React, { useState, useEffect } from 'react';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import {
  BottomCardColumn,
  BottomItems,
  BottomSubtitles,
  CardTytle,
  Img,
  ImgBox,
  MoreVertIconS,
} from './CoursList.styled';

import { cardsData } from '../../../assets/cardsData';

import {
  CardContent,
  RightCard,
  TopCard,
  Options,
  BottomCard,
} from './CoursList.styled';
import { Menu, MenuItem } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  display: 'flex',
  textAlign: 'start',
  color: theme.palette.text.secondary,
  minWidth: '758px',
}));

const options = ['None', 'Aktynwne', 'Nieaktywne', 'Wersje robocze'];

const ITEM_HEIGHT = 48;

const CoursList = ({ data, handleSortCardsData, getGroup, getId }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  // const [listGroup, setListGroup] = useState('');
  // const [listId, setListId] = useState('');

  const open = Boolean(anchorEl);

  // useEffect(() => {
  //   handleSortCardsData(listId, listGroup);
  // }, [listGroup]);

  const handleClick = event => {
    getId(event.currentTarget.id);
    setAnchorEl(event.currentTarget);
    // setListId(event.currentTarget.id);
  };

  const handleClose = event => {
    // setListGroup(event.target.innerText);

    setAnchorEl(null);
    getGroup(event.target.innerText);
  };

  return (
    <Box sx={{ width: '758px' }}>
      <Stack spacing={2}>
        {data !== [] &&
          data.map(item => (
            <Item key={item.id}>
              <CardContent>
                <ImgBox>
                  <Img src={item.image} alt="#" />
                </ImgBox>
                <RightCard>
                  <TopCard>
                    <CardTytle>{item.title}</CardTytle>
                    <Options>
                      <span>Publiczny</span>
                      <Switch
                        defaultChecked
                        style={{
                          color: 'rgba(0, 172, 193, 1)',
                        }}
                      />
                      <IconButton
                        style={{ width: '40px', height: '40px' }}
                        aria-label="more"
                        id={item.id}
                        aria-controls={open ? 'long-menu' : undefined}
                        aria-expanded={open ? 'true' : undefined}
                        aria-haspopup="true"
                        onClick={handleClick}
                      >
                        <MoreVertIconS />
                      </IconButton>
                      <Menu
                        id="long-menu"
                        MenuListProps={{
                          'aria-labelledby': 'long-button',
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        PaperProps={{
                          style: {
                            maxHeight: ITEM_HEIGHT * 4.5,
                            width: '20ch',
                          },
                        }}
                      >
                        {options.map(option => (
                          <MenuItem
                            key={option}
                            selected={option === 'Pyxis'}
                            onClick={handleClose}
                          >
                            {option}
                          </MenuItem>
                        ))}
                      </Menu>
                    </Options>
                  </TopCard>
                  <Divider />
                  <BottomCard>
                    <BottomCardColumn>
                      <BottomItems>{item.date}</BottomItems>
                      <BottomSubtitles>data utworzenia</BottomSubtitles>
                    </BottomCardColumn>
                    <BottomCardColumn>
                      <BottomItems>{item.autor}</BottomItems>
                      <BottomSubtitles>twórca</BottomSubtitles>
                    </BottomCardColumn>
                    <BottomCardColumn>
                      <BottomItems>{item.moduls}</BottomItems>
                      <BottomSubtitles>modułów</BottomSubtitles>
                    </BottomCardColumn>
                    <BottomCardColumn>
                      <BottomItems>{item.students}</BottomItems>
                      <BottomSubtitles>kursantów</BottomSubtitles>
                    </BottomCardColumn>
                    <BottomCardColumn>
                      <BottomItems>{item.comments}</BottomItems>
                      <BottomSubtitles>komentarze</BottomSubtitles>
                    </BottomCardColumn>
                  </BottomCard>
                </RightCard>
              </CardContent>
            </Item>
          ))}
      </Stack>
    </Box>
  );
};

export default CoursList;
