import React from 'react';
import LastNews from '../LatestNews/LatestNews';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import {
  MessagesBox,
  RightIconStyled,
  BlueBox,
  SvgUp,
  TextBox,
  LinkBox,
  VioletBox,
  SvgKub,
  Number,
  String,
  DividerS,
  String2,
  String3,
  DividerB,
  String4,
} from './Messages.styled';
// import jan from '../Messages/jan.svg';
import up from '../Messages/up.svg';
import kub from '../Messages/kub.svg';

const Messages = () => {
  return (
    <>
      <MessagesBox>
        <BlueBox>
          <SvgUp src={up} alt="#" />
          <TextBox>
            Przejdź na wyższy poziom i skorzystaj z pomocy dedykowanego
            Consierga.
          </TextBox>
          <LinkBox>
            Sprawdź usługi
            <RightIconStyled />
          </LinkBox>
        </BlueBox>
        <VioletBox>
          <SvgKub src={kub} alt="#" />
          <Number>12 250</Number>
          <String>punkty</String>
          <DividerS />
          <String2>ostatnio zdobyte</String2>
          <String3>
            300 pkt<span> – dodanie kursu</span>
          </String3>
          <DividerB />
          <String4>
            <InfoOutlinedIcon style={{ height: '18px' }} /> Gratulacje! Możesz
            wykorzystać punkty na bezpłatne konsultacje z naszym Conciergem!
          </String4>
        </VioletBox>
        <LastNews />
      </MessagesBox>
    </>
  );
};

export default Messages;
