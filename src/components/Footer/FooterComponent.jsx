import React from 'react';

import { Footer, FooterContent } from './FooterComponent.styled';
import { Divider } from '@mui/material';

const FooterComponent = () => {
  return (
    <>
      <Footer style={{ marginTop: '70px' }}>
        <Divider style={{ marginLeft: '24px', marginRight: '24px' }} />
        <FooterContent>
          <div>© Learning Space</div>
          <div>
            <span>Regulamin </span> · <span> Polityka prywatności </span> ·
            <span> Polityka plików cookies</span>
          </div>
        </FooterContent>
      </Footer>
    </>
  );
};

export default FooterComponent;
