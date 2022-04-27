import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { TabList } from '@mui/lab';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';

import { TabStyled } from './YourCourses.styled';

import CoursList from '../CoursList/CoursList';

import { cardsData } from '../../../assets/cardsData';

const YourCourses = () => {
  const [cardsDataSort, setCardsDataSort] = useState([]);
  const [value, setValue] = useState('1');

  // useEffect(() => {
  //   setCardsDataSort(cardsData);
  //   console.log(cardsDataSort);
  // }, [cardsDataSort]);

  const sortCardsData = id => {
    console.log(id);
    const items = cardsData.filter(item => item.id === id);
    setCardsDataSort(items);
    console.log(items);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', minWidth: '758px' }}>
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
          <CoursList cardsDataSort={cardsData} sortCardsData={sortCardsData} />
        </TabPanel>
        <TabPanel value="2" style={{ padding: '24px 0px 0px 0px' }}>
          <CoursList
            cardsDataSort={cardsDataSort}
            sortCardsData={sortCardsData}
          />
        </TabPanel>
        <TabPanel value="3" style={{ padding: '24px 0px 0px 0px' }}>
          {/* <CoursList
            cardsDataSort={cardsDataSort}
            sortCardsData={sortCardsData}
          /> */}
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default YourCourses;
