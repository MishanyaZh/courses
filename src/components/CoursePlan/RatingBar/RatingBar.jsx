import React from 'react';
import Rating from '@mui/material/Rating';

import RatingProgress from './RatingProgress/RatingProgress';

import { Opine, RatingBox, Right, Value } from './RatingBar.styled';

const RatingBar = () => {
  return (
    <>
      <RatingBox>
        <RatingProgress />

        <Right>
          <Value>3,6</Value>
          <Opine>23 opine</Opine>
          <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
        </Right>
      </RatingBox>
    </>
  );
};

export default RatingBar;
