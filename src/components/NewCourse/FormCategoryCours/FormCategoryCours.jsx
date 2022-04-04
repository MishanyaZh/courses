import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const FormCategoryCours = () => {
  const [category, setCategory] = React.useState('');
  const [categoryTwo, setCategoryTwo] = React.useState('');

  const handleChange = event => {
    setCategory(event.target.value);
  };
  const handleChangeTwo = event => {
    setCategoryTwo(event.target.value);
  };

  return (
    <Box
      sx={{ minWidth: 1014 }}
      style={{ display: 'flex', margin: '0 auto', alignItems: 'center' }}
    >
      <FormControl fullWidth style={{ marginRight: '40px', marginTop: '40px' }}>
        <InputLabel id="demo-simple-select-label">Kategoria kursu</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          label="Kategoria kursu"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth style={{ marginTop: '40px' }}>
        <InputLabel id="demo-simple-select-label">
          Podkategoria kursu (opcjonalnie)
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={categoryTwo}
          label="Podkategoria kursu (opcjonalnie)"
          onChange={handleChangeTwo}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default FormCategoryCours;
