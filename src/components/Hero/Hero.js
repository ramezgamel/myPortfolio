import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          Web Developer seeking to build up a strong career path, And working in
          a dynamic environment where I can develop my skills, Gain experience
          and utilize that towards the growth and development of the
          organization.
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
