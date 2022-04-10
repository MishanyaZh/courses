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
  ChartDescription,
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
            <ChartDescription>
              <div>
                <h2>Dochód</h2>
                <div>6 599,99 zł</div>
              </div>
              <div>ten tydzień</div>
            </ChartDescription>
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
