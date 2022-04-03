import React from 'react';
import Divider from '@mui/material/Divider';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import EmailIcon from '@mui/icons-material/Email';
import { Badge } from '@mui/material';

import joanna from '../LatestNews/joanna.svg';
import pawel from '../LatestNews/pawel.svg';
import {
  Arrow,
  Content,
  InfoAutor,
  Link,
  ListBox,
  ListItemBox,
  Name,
  Subtitle,
  Time,
} from './LastNews.styled';

const LastNews = () => {
  return (
    <div>
      <Subtitle>
        <EmailIcon /> Ostatnie wiadomości · <span> 2</span>
      </Subtitle>
      <Divider style={{ marginTop: '15px', marginBottom: '15px' }} />
      <ListBox>
        <ListItemBox>
          <ListItemAvatar>
            <Avatar alt="Paweł Nowak" src={pawel} />
          </ListItemAvatar>
          <div>
            <InfoAutor>
              <Name>Paweł Nowak</Name>
              <Badge color="secondary" variant="dot">
                <Time>11:25</Time>
              </Badge>
            </InfoAutor>
            <Content>Dzień dobry, miałem wys...</Content>
          </div>
        </ListItemBox>
        <Divider style={{ marginTop: '15px', marginBottom: '15px' }} />
        <ListItemBox>
          <ListItemAvatar>
            <Avatar alt="Paweł Nowak" src={joanna} />
          </ListItemAvatar>
          <div>
            <InfoAutor>
              <Name>Joanna Zalewska</Name>
              <Badge color="secondary" variant="dot">
                <Time>8:24</Time>
              </Badge>
            </InfoAutor>
            <Content>Dzień dobry, miałem wys...</Content>
          </div>
        </ListItemBox>
        <Divider style={{ marginTop: '15px', marginBottom: '15px' }} />
        <ListItemBox>
          <ListItemAvatar>
            <Avatar alt="Joanna Zalewska" src={joanna} />
          </ListItemAvatar>
          <div>
            <InfoAutor>
              <Name>Joanna Zalewska</Name>
              <Time>wt</Time>
            </InfoAutor>
            <Content>Dzień dobry, miałem wys...</Content>
          </div>
        </ListItemBox>
        <Divider style={{ marginTop: '15px', marginBottom: '15px' }} />
      </ListBox>
      <Link>
        Zobacz wszystkie <Arrow />
      </Link>

      <Subtitle>
        <EmailIcon /> Ostatnie wiadomości · <span> 6 </span>
      </Subtitle>
      <Divider style={{ marginTop: '15px', marginBottom: '15px' }} />
      <ListBox>
        <ListItemBox>
          <ListItemAvatar>
            <Avatar alt="Paweł Nowak" src={pawel} />
          </ListItemAvatar>
          <div>
            <InfoAutor>
              <Name>Paweł Nowak</Name>
              <Badge color="secondary" variant="dot">
                <Time>11:25</Time>
              </Badge>
            </InfoAutor>
            <Content>Dzień dobry, miałem wys...</Content>
          </div>
        </ListItemBox>
        <Divider style={{ marginTop: '15px', marginBottom: '15px' }} />
        <ListItemBox>
          <ListItemAvatar>
            <Avatar alt="Paweł Nowak" src={joanna} />
          </ListItemAvatar>
          <div>
            <InfoAutor>
              <Name>Joanna Zalewska</Name>
              <Badge color="secondary" variant="dot">
                <Time>8:24</Time>
              </Badge>
            </InfoAutor>
            <Content>Dzień dobry, miałem wys...</Content>
          </div>
        </ListItemBox>
        <Divider style={{ marginTop: '15px', marginBottom: '15px' }} />
        <ListItemBox>
          <ListItemAvatar>
            <Avatar alt="Joanna Zalewska" src={joanna} />
          </ListItemAvatar>
          <div>
            <InfoAutor>
              <Name>Joanna Zalewska</Name>
              <Time>wt</Time>
            </InfoAutor>
            <Content>Dzień dobry, miałem wys...</Content>
          </div>
        </ListItemBox>
        <Divider style={{ marginTop: '15px', marginBottom: '15px' }} />
      </ListBox>
      <Link>
        Zobacz wszystkie <Arrow />
      </Link>
    </div>
  );
};
export default LastNews;
