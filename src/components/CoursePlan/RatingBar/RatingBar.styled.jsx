import styled from '@emotion/styled';
import Paper from '@mui/material/Paper';

export const RatingBox = styled(Paper)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  box-sizing: border-box;
  min-width: 427px;
  height: 180px;
  margin-right: 24px;
  padding: 30px 24px;
  box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.04);
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const Value = styled.div`
  font-style: normal;
  font-weight: 800;
  font-size: 48px;
  line-height: 1.22;
  text-align: right;
  color: #37474f;
`;
export const Opine = styled.div`
  margin-bottom: 41px;
  margin-top: 4px;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.25;
  text-align: right;
  color: #78909c;
`;
