import styled from "styled-components";

export const Wrapper = styled.section`
  margin: 10px 0;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0 5px ${({ theme }) => theme.colors.alto};
`;

export const Header = styled.header`
  border-bottom: 1px solid ${({ theme }) => theme.colors.alto};
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 20px;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    text-align: center;
  }
`;

export const Title = styled.h2`
  font-size: 20px;
  margin: 0;
`;

export const Body = styled.div`
  padding: 20px;
`;
