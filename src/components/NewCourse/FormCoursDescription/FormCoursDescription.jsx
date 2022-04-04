import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const FormCoursDescription = () => {
  return (
    <>
      <Box component="form" noValidate autoComplete="off">
        <TextField
          style={{ minWidth: '1014px', marginTop: '40px' }}
          id="outlined-multiline-static"
          multiline
          rows={6}
          defaultValue="Opis kursu"
        />
      </Box>
    </>
  );
};

export default FormCoursDescription;
