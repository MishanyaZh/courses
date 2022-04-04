import React from 'react';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import upload from '../Upload/upload.jpg';
import uploaderrecomend from '../Upload/uploaderrecomend.jpg';
import { Box } from '@mui/system';
import { ButtonColor, ButtonsBox, ButtonWhite } from './Upload.styled';

const Input = styled('input')({
  display: 'none',
});

const Upload = () => {
  return (
    <>
      <Box style={{ display: 'flex' }}>
        <Stack
          direction="row"
          alignItems="center"
          spacing={2}
          style={{ marginLeft: '40px', marginTop: '40px' }}
        >
          <label htmlFor="icon-button-file">
            <Input accept="image/*" id="icon-button-file" type="file" />

            <img src={upload} alt="#" />
          </label>
        </Stack>
        <div style={{ marginLeft: '40px', marginTop: '40px' }}>
          <img src={uploaderrecomend} alt="#" />
        </div>
      </Box>
      <ButtonsBox>
        <ButtonWhite variant="text">Anuluj</ButtonWhite>
        <ButtonColor variant="contained">Zapisz</ButtonColor>
      </ButtonsBox>
    </>
  );
};

export default Upload;
