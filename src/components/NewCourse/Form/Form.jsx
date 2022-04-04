import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';

import FormChip from '../FormChip/FormChip';
import FormCategoryCours from '../FormCategoryCours/FormCategoryCours';
import FormCoursDescription from '../FormCoursDescription/FormCoursDescription';
import FormCourseLevel from '../FormCourseLevel/FormCourseLevel';
import Upload from '../Upload/Upload';

const Form = () => {
  return (
    <Paper>
      <FormControl
        style={{
          display: 'flex',
          margin: '0 auto',
          alignItems: 'center',
          marginTop: '40px',
          marginBottom: '80px',
        }}
        variant="outlined"
      >
        <Box
          sx={{
            width: 1014,
            maxWidth: '100%',
          }}
        >
          <TextField
            fullWidth
            id="Nazwa kursu"
            label="Nazwa kursu"
            variant="outlined"
          />
        </Box>
        <FormChip />
        <FormCategoryCours />
        <FormCoursDescription />
      </FormControl>
      <FormCourseLevel />
      <Upload />
    </Paper>
  );
};

export default Form;
