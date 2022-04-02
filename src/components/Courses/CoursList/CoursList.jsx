import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

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
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function CoursList() {
  return (
    <Box sx={{ width: '100%' }}>
      <Stack spacing={2}>
        <Item>
          <CardContent>
            <div>img</div>
            <RightCard>
              <TopCard>
                <div>title</div>
                <Options>option</Options>
              </TopCard>
              <BottomCard>
                <div>
                  <p>12.16.2020</p>
                  <p>data utworzenia</p>
                </div>
                <div>
                  <p>Jan Kowalski</p>
                  <p>twórca</p>
                </div>
                <div>
                  <p>5</p>
                  <p>modułów</p>
                </div>
                <div>
                  <p>28</p>
                  <p>kursantów</p>
                </div>
                <div>
                  <p>2</p>
                  <p>komentarze</p>
                </div>
              </BottomCard>
            </RightCard>
          </CardContent>
        </Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </Stack>
    </Box>
  );
}

export default CoursList;
