import styled from '@emotion/styled';
import Paper from '@mui/material/Paper';

export const Statistic = styled(Paper)`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  box-sizing: border-box;

  width: 201px;
  height: 118px;
  margin-bottom: 24px;
  padding: 24px;

  background-repeat: no-repeat;
  background-image: ${imgs => `url(${imgs.imgs})`};
  background-position: ${position => position.position};

  &:last-child {
    margin-bottom: 0px;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 106px;
`;
export const Title = styled.div`
  text-align: right;
  margin-top: 6px;

  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.25;

  color: #78909c;
`;
export const Amount = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 1.2;

  color: #37474f;
`;
