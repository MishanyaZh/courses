import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const FormCourseLevel = () => {
  const [level, setLevel] = React.useState('');

  const handleChange = event => {
    setLevel(event.target.value);
  };

  return (
    <Box sx={{ width: 487 }}>
      <FormControl fullWidth style={{ marginLeft: '40px', marginTop: '40px' }}>
        <InputLabel id="demo-simple-select-label">Poziom kursu</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={level}
          label="Poziom kursu"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default FormCourseLevel;
