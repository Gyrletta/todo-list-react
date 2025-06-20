import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

const activeClassName = "active";

export const StyledLink = styled(NavLink).attrs(() => ({
  activeClassName,
}))`
  color: ${({ theme }) => theme.colors.black};
  text-decoration: none;
  transition: color 0.3s ease, transform 0.3s ease;

  &.${activeClassName} {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.silver};
    border-bottom: 2px solid ${({ theme }) => theme.colors.lightGreen};
  }

  &:hover {
    transform: scale(1.05);
  }
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0px;
`;

export const Item = styled.li`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-gap: 10px;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.alto};

  &:hover {
    filter: brightness(110%);
  }

  &.tasks__item--hidden {
    display: none;
  }

  ${({ $hidden }) =>
    $hidden &&
    css`
      display: none;
    `}
`;

export const Content = styled.span`
  ${({ $done }) =>
    $done &&
    css`
      text-decoration: line-through;
    `}
`;

export const Button = styled.button`
  border: none;
  color: ${({ theme }) => theme.colors.white};
  width: 30px;
  height: 30px;
  padding: 0;
  transition: filter 0.3s;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ $toggleDone }) =>
    $toggleDone &&
    css`
      background: ${({ theme }) => theme.colors.green};
    `}

  ${({ $remove }) =>
    $remove &&
    css`
      background: ${({ theme }) => theme.colors.red};
    `}

 &:hover {
    filter: brightness(110%);
  }

  &:active {
    filter: brightness(120%);
  }
`;
