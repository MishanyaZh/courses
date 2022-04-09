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
  Amount,
  SoldCoursesText,
  SoldCoursesToday,
} from './StatisticsCourseList.styled';

import green from '../StatisticsCourseList/green.jpg';
import pink from '../StatisticsCourseList/pink.jpg';

import NorthEastIcon from '@mui/icons-material/NorthEast';
import SouthEastIcon from '@mui/icons-material/SouthEast';

const StatisticsCourseList = () => {
  return (
    <>
      <StatisticForm />
      <CardsBox>
        <Row>
          <SoldCourses props={green}>
            <Amount>693</Amount>
            <SoldCoursesText>sprzedanych kursów</SoldCoursesText>
            <SoldCoursesToday props={'green'}>
              <NorthEastIcon style={{ height: '18px' }} /> 3 dzisiaj
            </SoldCoursesToday>
          </SoldCourses>
          <SoldCourses props={pink}>
            <Amount>396</Amount>
            <SoldCoursesText>sprzedanych kursów</SoldCoursesText>
            <SoldCoursesToday props={'pink'}>
              <SouthEastIcon style={{ height: '18px' }} /> 3 dzisiaj
            </SoldCoursesToday>
          </SoldCourses>
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
