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
    handleSortCardsData(listId, listGroup);
  }, [listGroup, listId]);

  const handleSortCardsData = (listId, listGroup) => {
    const currentItem = cardsDataActive.filter(item => item.id === listId);
    setCurrentItem(currentItem);
    console.log(currentItem);
    if (listGroup === 'Nieaktywne') {
      const unicInactive = cardsDataInactive.find(item => item.id === listId);
      if (!unicInactive) {
        setCardsDataInactive(prevState => [...prevState, ...currentItem]);
        setCardsDataActive(cardsDataActive.filter(item => item.id !== listId));
        setCardsDataWorkingVersion(
          cardsDataWorkingVersion.filter(item => item.id !== listId),
        );
      }
    }

    if (listGroup === 'Aktynwne') {
      const unicActive = cardsDataActive.find(item => item.id === listId);
      console.log(unicActive);
      if (!unicActive) {
        setCardsDataActive(prevState => [...prevState, ...currentItem]);
        setCardsDataInactive(
          cardsDataInactive.filter(item => item.id !== listId),
        );
        setCardsDataWorkingVersion(
          cardsDataWorkingVersion.filter(item => item.id !== listId),
        );
      }
    }
    if (listGroup === 'Wersje robocze') {
      const workingVersion = cardsDataWorkingVersion.find(
        item => item.id === listId,
      );
      if (!workingVersion) {
        setCardsDataWorkingVersion(prevState => [...prevState, ...currentItem]);
        setCardsDataInactive(
          cardsDataInactive.filter(item => item.id !== listId),
        );
        setCardsDataActive(cardsDataActive.filter(item => item.id !== listId));
      }
    }
  };

  const getGroup = group => {
    setListGroup(group);
  };
  const getId = id => {
    setListId(id);
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
            handleSortCardsData={handleSortCardsData}
            getGroup={getGroup}
            getId={getId}
          />
        </TabPanel>
        <TabPanel value="2" style={{ padding: '24px 0px 0px 0px' }}>
          <CoursList
            data={cardsDataInactive}
            handleSortCardsData={handleSortCardsData}
            getGroup={getGroup}
            getId={getId}
          />
        </TabPanel>
        <TabPanel value="3" style={{ padding: '24px 0px 0px 0px' }}>
          <CoursList
            data={cardsDataWorkingVersion}
            handleSortCardsData={handleSortCardsData}
            getGroup={getGroup}
            getId={getId}
          />
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default YourCourses;

// switch (listGroup) {
//   case 'Nieaktywne':
//     const unicInactive = cardsDataInactive.find(item => item.id === listId);
//     if (!unicInactive) {
//       setCardsDataInactive(prevState => [...prevState, ...currentItem]);
//       setCardsDataActive(
//         cardsDataActive.filter(item => item.id !== listId),
//       );
//       setCardsDataWorkingVersion(
//         cardsDataWorkingVersion.filter(item => item.id !== listId),
//       );
//     }
//     break;

//   case 'Aktynwne':
//     const unicActive = cardsDataActive.find(item => item.id === listId);
//     if (!unicActive) {
//       setCardsDataActive(prevState => [...prevState, ...currentItem]);
//       setCardsDataInactive(
//         cardsDataInactive.filter(item => item.id !== listId),
//       );
//       setCardsDataWorkingVersion(
//         cardsDataWorkingVersion.filter(item => item.id !== listId),
//       );
//     }
//     break;

//   case 'Wersje robocze':
//     const workingVersion = cardsDataWorkingVersion.find(
//       item => item.id === listId,
//     );
//     if (!workingVersion) {
//       setCardsDataWorkingVersion(prevState => [
//         ...prevState,
//         ...currentItem,
//       ]);
//       setCardsDataInactive(
//         cardsDataInactive.filter(item => item.id !== listId),
//       );
//       setCardsDataActive(
//         cardsDataActive.filter(item => item.id !== listId),
//       );
//     }
//     break;

//   default:
//     console.log('default case');
//     break;
// }
