import { Section, Text, Img, Link } from "@react-email/components";
import React from "react";

type TitleProps = {
  imageUrl: string;
  imageAlt: string;
  title: string;
  content: string;
  buttonText?: string;
  buttonHref?: string;
  buttonTextColor?: string;
  buttonBackgroundColor?: string;
  cardMarginTop?: string;
  cardBackgroundColor?: string;
  titleFontSize?: string;
};

export default function PolygonCard({
  imageUrl,
  title,
  content,
  buttonText,
  buttonHref,
  buttonTextColor,
  buttonBackgroundColor,
  imageAlt,
  cardMarginTop,
  cardBackgroundColor,
  titleFontSize,
}: TitleProps) {
  return (
    <Section style={Body}>
      <div
        style={{
          ...Card,
          marginTop: cardMarginTop || "0px",
          backgroundColor: cardBackgroundColor,
        }}
      >
        <Link href={buttonHref}>
          <Img
            src={imageUrl}
            alt={imageAlt}
            style={squareImageBlock}
            width={500}
            height={360}
          />
        </Link>
        <div style={row}>
          <Text style={{ ...H2, fontSize: titleFontSize }}>{title}</Text>
          <Text style={p}>{content}</Text>
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
        </div>
      </div>
    </Section>
  );
}

const row = {
  padding: "60px 50px",
  paddingTop: "20px",
};
const Body = {
  backgroundColor: "#000",
};
const Card = {
  borderRadius: "14px",
  margin: "0 70px 60px",
  paddingTop: "20px",
};

const H2 = {
  color: "#f0f0f0",
  fontSize: "65px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "50px",
  letterSpacing: "0.4px",
  textAlign: "center",
  marginTop: 0,
};

const p = {
  margin: "30px auto",
  color: "#f0f0f0",
  fontSize: "22px",
  fontStyle: "normal",
  lineHeight: "32px",
  textAlign: "left",
};

const squareImageBlock = {
  borderRadius: "12px",
  objectFit: "cover",
  display: "block",
  margin: "0 auto",
  marginTop: "20px",
  border: "2px solid #000",
  padding: "20px",
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
