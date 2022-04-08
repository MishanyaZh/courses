import React from 'react';

import BreadcrumbsComponent from '../../NewCourse/Breadcrumbs/BreadcrumbsComponent';
import StatisticsCourse from '../StatisticsCourse/StatisticsCourse';

import { Container } from '@mui/material';
import { statisticsBread } from '../../../assets/breadcrumbsData';

import { Divider } from '@mui/material';
import {
  Footer,
  FooterContent,
} from '../../../views/NewCourse/NewCourse.styled';

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
        <Footer style={{ marginTop: '67px' }}>
          <Divider style={{ marginLeft: '24px' }} />
          <FooterContent>
            <div>© Learning Space</div>
            <div>
              Regulamin · Polityka prywatności · Polityka plików cookies
            </div>
          </FooterContent>
        </Footer>
      </Container>
    </>
  );
};

export default Main;
