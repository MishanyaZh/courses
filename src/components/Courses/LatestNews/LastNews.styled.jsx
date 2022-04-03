import styled from '@emotion/styled';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export const ListBox = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Subtitle = styled.div`
  display: flex;
  align-items: center;
  margin-top: 42px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.21;
  color: #37474f;
  & span {
    color: #00acc1;
  }
`;

export const ListItemBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InfoAutor = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const Name = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28;
  color: #37474f;
`;
export const Time = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.25;
  color: #37474f;
`;
export const Content = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.21;
  color: #78909c;
`;

export const Arrow = styled(ArrowForwardIosIcon)`
  margin-left: 4px;
  width: 14px;
  height: 14px;
  color: rgba(0, 172, 193, 1);
`;

export const Link = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.2;
  text-transform: uppercase;
  color: rgba(0, 172, 193, 1);
  cursor: pointer;
`;
