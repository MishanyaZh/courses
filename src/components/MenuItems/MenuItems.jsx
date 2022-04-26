import React from 'react';
import {
  Description,
  ListItemStyled,
  ListItemTextS,
  NavLinkStyled,
  Notification,
} from './MenuItems.styled';

const MenuItems = ({ items, righttext }) => {
  return (
    <>
      {items.map(item => (
        <NavLinkStyled key={item.id} to="/courseplan">
          <ListItemStyled button>
            {item.icon}
            <Description>
              <ListItemTextS primary={item.text} />
              {righttext === true ? (
                <Notification>{item.right}</Notification>
              ) : null}
            </Description>
          </ListItemStyled>
        </NavLinkStyled>
      ))}
    </>
  );
};

export default MenuItems;
