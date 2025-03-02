import styled from "styled-components";

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  margin-top: 20px;
  width: 100%;
  align-items: center;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: stretch;
    gap: 10px;
  }
`;

export const Button = styled.button`
  background: transparent;
  margin: 0 0 0 20px;
  color: teal;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  padding: 10px;
  text-align: center;

  &:hover {
    transform: scale(1.05);
  }

  &:disabled {
    color: #cccccc;
    cursor: not-allowed;
  }

  &:active {
    transform: scale(0.98);
  }

  @media (max-width: 600px) {
    width: 100%;
    margin: 0;
  }
`;
