import React from 'react';
import ChartBar from '../ChartBar/ChartBar';
import StatisticForm from '../StatisticForm/StatisticForm';
import {
  Rating,
  SoldCourses,
  Row,
  Chart,
  CardsBox,
  Statistic,
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
          <SoldCourses>box1</SoldCourses>
          <SoldCourses>box2</SoldCourses>
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
            <Statistic>box1</Statistic>
            <Statistic>box2</Statistic>
            <Statistic>box3</Statistic>
          </Column>
        </Row>
        <Row>
          <Progress>box1</Progress>
          <Progress>box2</Progress>
        </Row>
      </CardsBox>
    </>
  );
};

export default StatisticsCourseList;
