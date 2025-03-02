import styled from "styled-components";

export const SectionContainer = styled.section`
  margin-bottom: 20px;
`;

export const SectionWrapper = styled.section`
  margin-bottom: 20px;
`;

export const SectionHeader = styled.header`
  border-bottom: 1px solid #ddd;
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 20px;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

export const SectionTitle = styled.h2`
  font-size: 20px;
  margin: 0;
`;

export const SectionBody = styled.div`
  padding: 10px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;
