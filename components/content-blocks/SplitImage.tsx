import { Section, Text, Img, Link } from "@react-email/components";
import React from "react";

type TitleProps = {
  imageUrl: string;
  title: string;
  content: string;
  buttonText?: string;
  buttonHref?: string;
  bodyBackgroundColor?: string;
  buttonTextColor?: string;
  buttonBackgroundColor?: string;
  bodyTextColor?: string;
  titleTextColor?: string;
  imageAlt: string;
};

export default function SplitBlock({
  imageUrl,
  title,
  content,
  buttonText,
  buttonHref,
  buttonTextColor,
  buttonBackgroundColor,
  imageAlt,
  bodyBackgroundColor,
  bodyTextColor,
  titleTextColor,
}: TitleProps) {
  return (
    <Section
      style={{
        ...Body,
        backgroundColor: bodyBackgroundColor,
      }}
    >
      <Link href={buttonHref}>
        <Img
          src={imageUrl}
          alt={imageAlt}
          style={splitImageBlock}
          width={620}
          height={500}
        />
      </Link>
      <Text style={{ ...H2, color: titleTextColor }}>{title}</Text>
      <Text style={{ ...p, color: bodyTextColor }}>{content}</Text>
      {buttonText && (
        <Link
          style={{
            ...buttonPrimary,
            color: buttonTextColor as string,
            backgroundColor: buttonBackgroundColor as string,
          }}
          href={buttonHref}
        >
          {buttonText}
        </Link>
      )}
    </Section>
  );
}

const Body = {
  backgroundColor: "#FFF0BD",
  padding: "60px 60px 60px",
};

const H2 = {
  color: "#f0f0f0" as string,
  fontSize: "40px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "45px",
  letterSpacing: "0.4px",
  textAlign: "center",
  marginTop: "30px",
};

const p = {
  margin: "30px auto",
  color: "#001E44",
  fontSize: "22px",
  fontStyle: "normal",
  lineHeight: "32px",
  textAlign: "left",
};

const splitImageBlock = {
  padding: "10px 0 10px 0",
  border: "2px solid #2d2d2d",
};

const buttonPrimary = {
  textAlign: "center",
  fontSize: "22px",
  fontStyle: "normal",
  fontWeight: 600,
  lineHeight: "22px",
  letterSpacing: "-0.44px",
  borderRadius: "4px",
  padding: "29px 0",
  display: "block",
};
