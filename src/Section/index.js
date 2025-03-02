import React from "react";
import {
  SectionContainer,
  SectionWrapper,
  SectionHeader,
  SectionTitle,
  SectionBody,
} from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
  <SectionContainer>
    <SectionWrapper>
      <SectionHeader>
        <SectionTitle>{title}</SectionTitle>
        {extraHeaderContent}
      </SectionHeader>
      <SectionBody>{body}</SectionBody>
    </SectionWrapper>
  </SectionContainer>
);

export default Section;
