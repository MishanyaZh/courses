import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { TabList } from '@mui/lab';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';

import { TabStyled } from './YourCourses.styled';

import CoursList from '../CoursList/CoursList';

import { cardsData } from '../../../assets/cardsData';
import { dataInactive } from '../../../assets/cardsData';
import { dataWorkingVersion } from '../../../assets/cardsData';

const YourCourses = () => {
  const [value, setValue] = useState('1');

  const [cardsDataActive, setCardsDataActive] = useState(
    cardsData ? cardsData : [],
  );
  const [cardsDataInactive, setCardsDataInactive] = useState(
    dataInactive ? dataInactive : [],
  );
  const [cardsDataWorkingVersion, setCardsDataWorkingVersion] = useState(
    dataWorkingVersion ? dataWorkingVersion : [],
  );

  const [listGroup, setListGroup] = useState('');
  const [listId, setListId] = useState('');
  const [currentItem, setCurrentItem] = useState('');

  useEffect(() => {
    handleSortCardsData(listId, listGroup, value);
  }, [listGroup, listId, value]);

  const handleSortCardsData = (listId, listGroup, value) => {
    switch (value) {
      case '1':
        const currentItemActive = cardsDataActive.filter(
          item => item.id === listId,
        );
        setCurrentItem(currentItemActive);
        break;
      case '2':
        const currentItemInactive = cardsDataInactive.filter(
          item => item.id === listId,
        );
        setCurrentItem(currentItemInactive);
        break;
      case '3':
        const currentItemWorkingVersion = cardsDataWorkingVersion.filter(
          item => item.id === listId,
        );
        setCurrentItem(currentItemWorkingVersion);
        break;

      default:
        console.log('def');
        break;
    }
    if (listGroup === 'Nieaktywne') {
      const unicInactive = cardsDataInactive.find(item => item.id === listId);
      if (!unicInactive) {
        setCardsDataInactive(prevState => [...prevState, ...currentItem]);
        alert('you moved the course to Nieaktywne group');
        setCardsDataActive(cardsDataActive.filter(item => item.id !== listId));
        setCardsDataWorkingVersion(
          cardsDataWorkingVersion.filter(item => item.id !== listId),
        );
      }
    }
    if (listGroup === 'Aktynwne') {
      const unicActive = cardsDataActive.find(item => item.id === listId);
      if (!unicActive) {
        setCardsDataActive(prevState => [...prevState, ...currentItem]);
        alert('you moved the course to Aktynwne group');
        setCardsDataInactive(
          cardsDataInactive.filter(item => item.id !== listId),
        );
        setCardsDataWorkingVersion(
          cardsDataWorkingVersion.filter(item => item.id !== listId),
        );
      }
    }
    if (listGroup === 'Wersje robocze') {
      const unicWorkingVersion = cardsDataWorkingVersion.find(
        item => item.id === listId,
      );
      if (!unicWorkingVersion) {
        setCardsDataWorkingVersion(prevState => [...prevState, ...currentItem]);
        alert('you moved the course to Wersje robocze group');
        setCardsDataInactive(
          cardsDataInactive.filter(item => item.id !== listId),
        );
        setCardsDataActive(cardsDataActive.filter(item => item.id !== listId));
      }
    }
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const getGroup = group => {
    setListGroup(group);
  };
  const getId = id => {
    setListId(id);
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
            <TabStyled label={`Aktynwne ${cardsDataActive.length}`} value="1" />
            <TabStyled
              label={`Nieaktywne ${cardsDataInactive.length}`}
              value="2"
            />
            <TabStyled
              label={`Wersje robocze ${cardsDataWorkingVersion.length}`}
              value="3"
            />
          </TabList>
        </Box>
        <TabPanel value="1" style={{ padding: '24px 0px 0px 0px' }}>
          <CoursList
            data={cardsDataActive}
            getGroup={getGroup}
            getId={getId}
            currentItem={currentItem}
          />
        </TabPanel>
        <TabPanel value="2" style={{ padding: '24px 0px 0px 0px' }}>
          <CoursList
            data={cardsDataInactive}
            getGroup={getGroup}
            getId={getId}
            currentItem={currentItem}
          />
        </TabPanel>
        <TabPanel value="3" style={{ padding: '24px 0px 0px 0px' }}>
          <CoursList
            data={cardsDataWorkingVersion}
            getGroup={getGroup}
            getId={getId}
            currentItem={currentItem}
          />
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default YourCourses;
