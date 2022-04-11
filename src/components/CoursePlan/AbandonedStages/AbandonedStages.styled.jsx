import styled from '@emotion/styled';
import Paper from '@mui/material/Paper';

export const ProgressBox = styled(Paper)`
  box-sizing: border-box;
  min-width: 427px;
  height: 268px;
  margin-right: 24px;
  padding: 24px;
  box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.04);
`;

export const Title = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.22;
  margin-bottom: 24px;

  color: #000000;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;
export const Description = styled.div`
  width: 90px;
  height: 90px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-right: 39px;
  padding-left: 11px;
  box-sizing: border-box;

  background-repeat: no-repeat;
  background-image: ${img => `url(${img.img})`};
`;

export const Value = styled.div`
  font-style: normal;
  font-weight: 800;
  font-size: 36px;
  line-height: 1.22;

  color: #37474f;
`;

export const SubTitle = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.25;

  color: #78909c;
`;
