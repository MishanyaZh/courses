import React from 'react';
import {
  Amount,
  Description,
  Statistic,
  Title,
} from './DynamicsCourses.styled';

import startedcourses from '../DynamicsCourses/startedcourses.svg';
import finishedcourses from '../DynamicsCourses/finishedcourses.svg';
import timecourses from '../DynamicsCourses/timecourses.svg';

const dataDynamicsCourses = [
  {
    id: 1,
    title: 'rozpoczętych kursów',
    amount: '43',
    img: startedcourses,
    position: 'left 14px top 19px',
  },
  {
    id: 2,
    title: 'ukończonych kursów',
    amount: '15',
    img: finishedcourses,
    position: 'left 0px top 19px',
  },
  {
    id: 3,
    title: 'średni czas porzucenia kursu',
    amount: '12 dni',
    img: timecourses,
    position: 'left 14px top 19px',
  },
];

const DynamicsCourses = () => {
  return (
    <>
      {dataDynamicsCourses.map(card => (
        <Statistic key={card.id} imgs={card.img} position={card.position}>
          <Description>
            <Amount>{card.amount}</Amount>
            <Title>{card.title}</Title>
          </Description>
        </Statistic>
      ))}
    </>
  );
};

export default DynamicsCourses;
