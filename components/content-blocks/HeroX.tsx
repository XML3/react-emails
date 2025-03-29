import { Section, Img, Link, Text, Row, Column } from "@react-email/components";
import React from "react";

type HeroXProps = {
  logoLink: string;
  link: string;
  backgroundColor?: string;
  title: string;
  titleColor?: string;
  subtitle?: string;
  subtitleColor?: string;
  preContent?: string;
  preContentColor?: string;
  content?: string;
  contentColor?: string;
  logoText?: string;
  imageUrl: string;
  imageAlt: string;
  buttonText?: string;
  buttonHref?: string;
  buttonTextColor?: string;
  buttonBackgroundColor?: string;
  paddingBottom?: string; // Optional prop for paddingBottom
  children?: React.ReactNode;
};

export default function HeroX({
  logoLink,
  link,
  backgroundColor,
  title,
  titleColor,
  subtitle,
  subtitleColor,
  preContent,
  preContentColor,
  content,
  contentColor,
  logoText,
  imageUrl,
  imageAlt,
  buttonText,
  buttonHref,
  buttonBackgroundColor,
  buttonTextColor,
  paddingBottom = "50px",
  children,
}: HeroXProps) {
  return (
    <>
      <Section style={{ ...header, paddingBottom }}>
        <Row style={row}>
          <Column style={logoColumn}>
            <Link href={logoLink}>
              <Img
                style={heroLogo}
                width={90}
                height={90}
                src="https://i.ibb.co/ZzbKY7zt/henry-cropped33.png"
                alt="Hery More Logo"
              />
            </Link>
          </Column>
          <Column style={textImageColumn}>
            <Link href={logoLink}>
              <Img
                style={heroTextImage}
                width={200}
                height={"auto"}
                src="https://i.ibb.co/7tkyfpY8/Henry-Text.png"
                alt="Henry More Text"
              />
            </Link>
          </Column>
        </Row>

        <Text style={{ ...H2, color: titleColor }}>{title}</Text>
        <Text
          style={{ ...p, color: preContentColor, paddingBottom: paddingBottom }}
        >
          {preContent}
        </Text>

        <Link href={link}>
          <Img
            style={heroImage}
            src={imageUrl}
            alt={imageAlt}
            width={750}
            height={700}
          />
        </Link>
      </Section>
    </>
  );
}

const header = {
  backgroundColor: " #2a2a2a",
  padding: "50px 0px 100px",
};

const row = {
  alignItems: "center",
  padding: "0px 30px 60px 30px",
};

const logoColumn = {
  paddingRight: "20px",
  paddingLeft: "6%",
};

const textImageColumn = {
  paddingLeft: "30%",
};

const heroLogo = {
  objectFit: "contain",
  margin: "0",
};

const heroTextImage = {
  objectFit: "contain",
  border: "1px solid #f0f0f0",
  borderRadius: "4px",
  padding: "6px",
};

const H2 = {
  fontSize: "42px",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "42px",
  letterSpacing: "-1px",
  textAlign: "center",
  margin: "20px auto",
  padding: "0 50px",
};

const p = {
  fontSize: "22px",
  fontStyle: "normal",
  lineHeight: "30px",
  letterSpacing: "-1px",
  textAlign: "center",
  margin: "30px auto 0",
  padding: "10px 58px 10px",
};

const H1 = {
  fontSize: "55px",
  fontStyle: "normal",
  fontWeight: 600,
  lineHeight: "32px",
  letterSpacing: "-1px",
  textAlign: "center",
  margin: "100px auto 0",
};

const heroImage = {
  objectFit: "cover",
  width: "100%",
  height: "auto",
  margin: "0 auto",
};
