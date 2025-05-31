import React from "react";
import { toAuthor, toTasks } from "../routes";
import { StyledNavLink, Item, List } from "../styled";

export default () => {
  return (
    <nav>
      <List>
        <Item>
          <StyledNavLink to={toTasks()}>Zadania</StyledNavLink>
        </Item>
        <Item>
          <StyledNavLink to={toAuthor()}>O autorze</StyledNavLink>
        </Item>
      </List>
    </nav>
  );
};
