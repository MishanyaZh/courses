import React from 'react';

import BreadcrumbsComponent from '../../NewCourse/Breadcrumbs/BreadcrumbsComponent';
import StatisticsCourse from '../StatisticsCourse/StatisticsCourse';
import FooterComponent from '../../Footer/FooterComponent';

import { Container } from '@mui/material';
import { statisticsBread } from '../../../assets/breadcrumbsData';

const Main = () => {
  return (
    <>
      <Container
        fixed
        style={{
          width: '1106px',
          paddingBottom: '20px',
          background: 'rgba(245, 247, 248, 0.6)',
        }}
      >
        <BreadcrumbsComponent
          breadData={statisticsBread}
          curent={'Statystyki'}
        />
        <StatisticsCourse />
        <FooterComponent />
      </Container>
    </>
  );
};

export default Main;
