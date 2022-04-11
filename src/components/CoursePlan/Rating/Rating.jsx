import React from 'react';

import RatingProgress from './RatingProgress/RatingProgress';

import { RatingBox, Right } from './Rating.styled';

const Rating = () => {
  return (
    <>
      <RatingBox>
        <div>
          <RatingProgress />
        </div>

        <Right>
          <div>3,6</div>
          <div>23 opine</div>
          <div>stars</div>
        </Right>
      </RatingBox>
    </>
  );
};

export default Rating;
