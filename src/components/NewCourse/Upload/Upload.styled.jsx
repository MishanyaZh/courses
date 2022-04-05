import styled from '@emotion/styled';
import Button from '@mui/material/Button';

export const ButtonsBox = styled.div`
  display: flex;
  margin: 48px 0px 48px 48px;
`;

export const ButtonColor = styled(Button)`
  text-transform: uppercase;
  background: rgba(0, 172, 193, 1);
  border-radius: 40px;
  width: 134px;
  height: 39px;
  margin-left: 24px;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.2;
  font-family: 'Montserrat';
`;
export const ButtonWhite = styled(Button)`
  width: 90px;
  height: 39px;
  color: rgba(0, 172, 193, 1);
  border-radius: 40px;
  text-transform: uppercase;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.2;
  font-family: 'Montserrat';
`;
