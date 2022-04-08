import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { TabList } from '@mui/lab';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import { TabStyled } from '../../Courses/YourCourses/YourCourses.styled';

const StatisticsCourse = () => {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            style={{}}
          >
            <TabStyled label="Aktynwne · 12" value="1" />
            <TabStyled label="Nieaktywne · 7" value="2" />
            <TabStyled label="Wersje robocze · 4" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1" style={{ padding: '24px 0px 0px 0px' }}>
          <p>ups empty...</p>
        </TabPanel>
        <TabPanel value="2">
          <p>ups empty...</p>
        </TabPanel>
        <TabPanel value="3">
          <p>ups empty...</p>
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default StatisticsCourse;
