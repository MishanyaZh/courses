import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { TabList } from '@mui/lab';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';

import StatisticsCourseList from '../StatisticsCourseList/StatisticsCourseList';

import { TabStyled } from '../../Courses/YourCourses/YourCourses.styled';

const StatisticsCourse = () => {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
    // sx={{
    //   width: '100%',
    //   minHeight: '868px',
    // }}
    >
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            style={{}}
          >
            <TabStyled label="Kursy" value="1" />
            <TabStyled label="Kursanci" value="2" />
            <TabStyled label="Quizy i testy" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1" style={{ padding: '24px 0px 0px 0px' }}>
          <StatisticsCourseList />
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
