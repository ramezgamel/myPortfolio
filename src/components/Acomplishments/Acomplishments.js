import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
  "JS",
  "TS",
  "Nodejs",
  "Angular",
  "React",
  "Next",
  "Express",
  "Mongoose",
  "MongoDB",
  "HTML",
  "CSS",
  "JQuery",
  "BootStrap",
  "Tailwind",
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Skills</SectionTitle>
    <Boxes >
      {data.map((card, index) => (
        <Box key={index}>{card}</Box>
      ))}
    </Boxes>
    <SectionDivider />
  </Section>
);

export default Acomplishments;
