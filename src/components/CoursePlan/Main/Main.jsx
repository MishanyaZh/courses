import React from 'react';

import BreadcrumbsComponent from '../../NewCourse/Breadcrumbs/BreadcrumbsComponent';

import { statisticsBread } from '../../../assets/breadcrumbsData';
import { Container } from '@mui/material';

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
          title={'Statystyki'}
        />
        {/* <StatisticsCourse /> */}
      </Container>
    </>
  );
};

export default Main;
