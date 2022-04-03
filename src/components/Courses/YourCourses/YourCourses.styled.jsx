import styled from '@emotion/styled';
import Tab from '@mui/material/Tab';

export const TabStyled = styled(Tab)`
  text-transform: none;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.2;
  text-align: center;

  &:focus {
    color: rgba(0, 172, 193, 1);
  }
`;
