import React from 'react';
import ChartBar from '../ChartBar/ChartBar';
import StatisticForm from '../StatisticForm/StatisticForm';
import DynamicsCourses from '../DynamicsCourses/DynamicsCourses';
import SoldCoursesList from '../SoldCoursesList/SoldCoursesList';
import ActiveDiscussion from '../ActiveDiscussion/ActiveDiscussion';
import AbandonedStages from '../AbandonedStages/AbandonedStages';
import Rating from '../Rating/Rating';
import { Row, Chart, CardsBox, Column } from './StatisticsCourseList.styled';

const StatisticsCourseList = () => {
  return (
    <>
      <StatisticForm />
      <CardsBox>
        <Row>
          <SoldCoursesList />
          <Rating />
        </Row>
        <Row>
          <Chart>
            <ChartBar />
          </Chart>
          <Column>
            <DynamicsCourses />
          </Column>
        </Row>
        <Row>
          <AbandonedStages />
          <ActiveDiscussion />
        </Row>
      </CardsBox>
    </>
  );
};

export default StatisticsCourseList;
