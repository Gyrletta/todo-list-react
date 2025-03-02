import styled from "styled-components";

export const TasksList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 20px;
`;

export const TaskItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #f9f9f9;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f1f1f1;
  }

  &.tasks__item--hidden {
    display: none;
  }
`;

export const TaskContent = styled.span`
  ${({ done }) =>
    done &&
    `
    text-decoration: line-through;
    color: #888;
  `}
`;

export const ToggleDoneButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  width: 25px;
  height: 25px;
  margin-right: 15px;
  background-color: green;
  position: relative;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: darkgreen;
    transform: scale(1.1);
  }
`;

export const RemoveButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
  color: red;

  &:hover {
    color: darkred;
    transform: scale(1.1);
  }
`;
