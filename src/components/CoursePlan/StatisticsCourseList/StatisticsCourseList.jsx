import React from 'react';
import ChartBar from '../ChartBar/ChartBar';
import StatisticForm from '../StatisticForm/StatisticForm';
import DynamicsCourses from '../DynamicsCourses/DynamicsCourses';
import SoldCoursesList from '../SoldCoursesList/SoldCoursesList';
import ActiveDiscussion from '../ActiveDiscussion/ActiveDiscussion';
import {
  Rating,
  Row,
  Chart,
  CardsBox,
  Column,
  Progress,
} from './StatisticsCourseList.styled';

const StatisticsCourseList = () => {
  return (
    <>
      <StatisticForm />
      <CardsBox>
        <Row>
          <SoldCoursesList />
          <Rating>box3</Rating>
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
          <Progress>box2</Progress>
          <ActiveDiscussion />
        </Row>
      </CardsBox>
    </>
  );
};

export default StatisticsCourseList;
