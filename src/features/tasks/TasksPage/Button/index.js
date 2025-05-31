import styled from "styled-components";

export default styled.button`
  background: transparent;
  margin: 0 0 0 20px;
  color: ${({ theme }) => theme.colors.teal};
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  padding: 10px;
  text-align: center;

  &:hover {
    transform: scale(1.05);
    filter: brightness(110%);
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.silver};
  }

  &:active {
    transform: scale(0.98);
    filter: brightness(120%);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    flex-basis: 100%;
    margin: 10px;
  }
`;
