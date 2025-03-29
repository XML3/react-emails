import { Section, Text, Link } from "@react-email/components";
import React from "react";

type TitleProps = {
  title?: string;
  buttonText?: string;
  buttonHref?: string;
  buttonTextColor?: string;
  buttonBackgroundColor?: string;
  paddingBottom?: string;
  children: React.ReactNode;
};

export default function Title({
  title,
  buttonHref,
  buttonText,
  buttonBackgroundColor,
  buttonTextColor,
  paddingBottom = "100px",
  children,
}: TitleProps) {
  return (
    <Section
      style={{
        ...titleBody,
        paddingBottom,
      }}
    >
      <Text style={H1}>{title}</Text>
      <Text style={p}>{children}</Text>
      {buttonText && (
        <Link
          style={{
            ...buttonPrimary,
            color: buttonTextColor,
            backgroundColor: buttonBackgroundColor,
          }}
          href={buttonHref}
        >
          {buttonText}
        </Link>
      )}
    </Section>
  );
}

const titleBody = {
  backgroundColor: " #2a2a2a",
  padding: "50px 58px 100px",
};

const H1 = {
  color: "#98D2C0",
  fontSize: "55px",
  fontStyle: "normal",
  fontWeight: 600,
  lineHeight: "55px",
  letterSpacing: "-1px",
  textAlign: "center",
};

const p = {
  color: "#001E44",
  fontSize: "22px",
  fontStyle: "normal",
  lineHeight: "30px",
  textAlign: "center",
  margin: "30px auto 0",
};

const buttonPrimary = {
  display: "block",
  fontSize: "22px",
  fontStyle: "normal",
  fontWeight: 600,
  lineHeight: "22px",
  letterSpacing: "-0.44px",
  textAlign: "center",
  borderRadius: "4px",
  padding: "29px 0",
  marginTop: "30px",
};
