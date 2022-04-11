import React from 'react';
import {
  Content,
  Description,
  ProgressBox,
  SubTitle,
  Title,
  Value,
} from './AbandonedStages.styled';

import ProgressBar from './ProgressBar/ProgressBar';
import progressimg from '../AbandonedStages/progressimg.svg';

const AbandonedStages = () => {
  return (
    <ProgressBox>
      <Title>Najczęściej porzucane etapy</Title>
      <Content>
        <Description img={progressimg}>
          <Value>21</Value>
          <SubTitle>porzuconych kursów</SubTitle>
        </Description>
        <div>
          <ProgressBar />
        </div>
      </Content>
    </ProgressBox>
  );
};
export default AbandonedStages;
