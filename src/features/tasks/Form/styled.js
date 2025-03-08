import styled from "styled-components";

export const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-template-columns: 1fr;
  }
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.alto};
`;

export const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.teal};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    filter: brightness(110%);
    transform: scale(1.05);
  }

  &:active {
    filter: brightness(120%);
  }
`;
