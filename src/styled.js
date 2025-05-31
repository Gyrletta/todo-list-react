import { NavLink } from "react-router-dom";
import styled from "styled-components";

const activeClassName = "active";

export const StyledNavLink = styled(NavLink).attrs(() => ({
  activeClassName,
}))`
  color: ${({ theme }) => theme.colors.silver};
  text-decoration: none;
  transition: transform 0.1s ease, color 0.1s ease;

  &.${activeClassName} {
    color: ${({ theme }) => theme.colors.white};
    border-bottom: 1px solid;
    font-weight: bold;
  }

  &:hover {
    transform: scale(1.5);
  }
`;

export const List = styled.ul`
  background: ${({ theme }) => theme.colors.teal};
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  list-style: none;
`;

export const Item = styled.li`
  margin: 20px;
`;
