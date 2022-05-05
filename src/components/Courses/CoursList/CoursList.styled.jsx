import styled from '@emotion/styled';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export const MoreVertIconS = styled(MoreVertIcon)`
  padding: 5px;
  color: rgba(0, 172, 193, 1);
  border: 1px solid rgba(176, 190, 197, 1);
  border-radius: 25px;
`;

export const CardContent = styled.div`
  max-width: 758px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  cursor: pointer;
  padding: 24px;
`;

export const RightCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const TopCard = styled.div`
  width: 600px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CardTytle = styled.span`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: rgba(55, 71, 79, 1);
`;

export const Options = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;

  & .css-julti5-MuiSwitch-root {
    /* margin-right: 24px; */
  }
`;

export const BottomCard = styled.div`
  display: flex;
  width: 600px;
  justify-content: space-between;
`;
export const BottomCardColumn = styled.div`
  display: flex;
  flex-direction: column;
`;
export const BottomItems = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.2;
  margin-top: 0px;
  margin-bottom: 0px;

  color: #37474f;
`;
export const BottomSubtitles = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.25;
  margin: 0px 0px 0px 0px;

  color: #78909c;
`;

export const ImgBox = styled.div`
  margin: 0px 24px 0px 0px;
`;

export const Img = styled.img`
  height: 120px;
  width: 120px;
`;
