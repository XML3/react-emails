import { Section, Text } from "@react-email/components";
import React from "react";

type TitleProps = {
  children: React.ReactNode;
};

export default function finalMessage({ children }: TitleProps) {
  return (
    <Section style={Body}>
      <Text style={p}>{children}</Text>
    </Section>
  );
}

const Body = {
  padding: "60px 68px",
  backgroundColor: "#E50046",
};

const p = {
  color: "#f0f0f0",
  fontSize: "20px",
  fontStyle: "normal",
  lineHeight: "29px",
  textAlign: "center",
  margin: "0",
};
