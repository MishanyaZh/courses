import React from 'react';
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
          <Chart>chart</Chart>
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
