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
        <NavLinkStyled to="/courseplan">
          <ListItemStyled key={item.id} button>
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
