import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { TabList } from '@mui/lab';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';

import { TabStyled } from './YourCourses.styled';

import CoursList from '../CoursList/CoursList';

function YourCourses() {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <TabStyled label="Aktynwne · 12" value="1" />
            <TabStyled label="Nieaktywne · 7" value="2" />
            <TabStyled label="Wersje robocze · 4" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <CoursList />
        </TabPanel>
        <TabPanel value="2">Nieaktywne · 7</TabPanel>
        <TabPanel value="3">Wersje robocze · 4</TabPanel>
      </TabContext>
    </Box>
  );
}

export default YourCourses;
