import styled from "styled-components";

export const Wrapper = styled.div`
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
