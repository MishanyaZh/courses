import styled from '@emotion/styled';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Divider } from '@mui/material';
import blue from '../Messages/blue.jpg';
import violet from '../Messages/violet.jpg';

export const SelectStyled = styled(KeyboardArrowDownIcon)`
  fill: rgba(55, 71, 79, 1);
  margin-left: 8px;
`;
export const RightIconStyled = styled(ArrowForwardIosIcon)`
  fill: rgba(255, 255, 255, 1);
  cursor: pointer;
  height: 16px;
  width: 16px;
  margin-left: 4px;
`;

export const MessagesBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 300px;
  padding-top: 24px;
`;

export const Autor = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.2;

  color: #37474f;
`;

export const Name = styled.span`
  margin-left: 8px;
`;

export const BlueBox = styled.div`
  position: relative;
  width: 252px;
  height: 149px;
  margin-top: 24px;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${blue});
`;

export const SvgUp = styled.img`
  position: absolute;
  left: 16px;
  top: 16px;
`;

export const TextBox = styled.div`
  position: absolute;
  width: 151px;
  height: 85px;
  left: 72px;
  top: 16px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.2;

  color: #ffffff;
`;

export const LinkBox = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 160px;
  height: 17px;
  left: 72px;
  top: 116px;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;

  text-transform: uppercase;
  cursor: pointer;

  color: #ffffff;
`;

export const VioletBox = styled.div`
  position: relative;
  margin-top: 24px;
  width: 252px;
  height: 231px;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${violet});
`;
export const SvgKub = styled.img`
  position: absolute;
  left: 16px;
  top: 16px;
`;
export const Number = styled.div`
  position: absolute;
  left: 72px;
  top: 16px;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 1.2;
  color: #ffffff;
`;
export const String = styled.div`
  position: absolute;
  left: 72px;
  top: 43px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;

  color: #ffffff;
`;
export const DividerS = styled(Divider)`
  position: absolute;
  width: 220px;
  height: 0px;
  left: 16px;
  top: 72px;
  background: rgba(255, 255, 255, 0.24);
`;
export const String2 = styled.div`
  position: absolute;
  left: 16px;
  top: 80px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;

  color: #ffffff;
`;
export const String3 = styled.div`
  position: absolute;
  left: 16px;
  top: 102px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.2;
  color: #ffffff;
  & span {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
  }
`;
export const DividerB = styled(Divider)`
  position: absolute;
  width: 220px;
  height: 0px;
  left: 16px;
  top: 132px;
  background: rgba(255, 255, 255, 0.24);
`;

export const String4 = styled.div`
  position: absolute;
  left: 16px;
  top: 146px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.2;

  color: #ffffff;
`;
