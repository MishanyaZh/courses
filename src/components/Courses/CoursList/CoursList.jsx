import React from 'react';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { styled } from '@mui/material/styles';
import {
  BottomCardColumn,
  BottomItems,
  BottomSubtitles,
  CardTytle,
  Img,
  ImgBox,
} from './CoursList.styled';

import { cardsData } from '../../../assets/cardsData';

import {
  CardContent,
  RightCard,
  TopCard,
  Options,
  BottomCard,
} from './CoursList.styled';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  // padding: theme.spacing(1),
  display: 'flex',
  textAlign: 'start',
  color: theme.palette.text.secondary,
  minWidth: '758px',
}));

const CoursList = () => {
  return (
    <Box sx={{ width: '758px' }}>
      <Stack spacing={2}>
        {cardsData.map(item => (
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
                      style={{
                        width: '40px',
                        height: '40px',
                        // marginRight: '24px',
                      }}
                      aria-label="more"
                      id="long-button"
                      aria-haspopup="true"
                    >
                      <MoreVertIcon
                        style={{
                          padding: '5px',
                          color: 'rgba(0, 172, 193, 1)',
                          border: '1px solid rgba(176, 190, 197, 1)',
                          borderRadius: '25px',
                        }}
                      />
                    </IconButton>
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
