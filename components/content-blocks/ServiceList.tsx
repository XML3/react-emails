import { Section, Text, Img, Link, Column, Row } from "@react-email/components";
import React from "react";

type ListProps = {
  title?: string;
  titleColor?: string;
  smallTitle?: string;
  row1Data: {
    imageUrl: string;
    imageAlt: string;
    subTitle?: string;
    subTitleColor?: string;
    content?: string;
    price?: string;
  }[];
  row2Data: {
    imageUrl: string;
    imageAlt: string;
    subTitle?: string;
    subTitleColor?: string;
    content?: string;
    price?: string;
  }[];
  bodyTextColor?: string;
  bodyBackgroundColor?: string;
  buttonTextColor?: string;
  buttonBackgroundColor?: string;
  buttonHref?: string;
  buttonText?: string;
};

export default function List({
  title,
  titleColor,
  smallTitle,
  row1Data,
  row2Data,
  bodyTextColor,
  bodyBackgroundColor,
  buttonText,
  buttonTextColor,
  buttonBackgroundColor,
  buttonHref,
}: ListProps) {
  return (
    <Section style={Body}>
      <div style={{ ...section, backgroundColor: bodyBackgroundColor }}>
        <Text style={{ ...H2, color: titleColor }}>{title}</Text>
        <Text style={{ ...H3, color: titleColor }}>{smallTitle}</Text>

        <Row style={row}>
          {row1Data.map((item, index) => (
            <Column key={`row1-col-${index}`} style={{ ...rowItem }}>
              <div style={column}>
                <Img
                  style={polyImage}
                  src={item.imageUrl}
                  alt={item.imageAlt}
                ></Img>
                <Text style={{ ...H4 }}>{item.subTitle}</Text>
              </div>
              <div style={column2}>
                <Text style={{ ...p, ...borderBotton, color: bodyTextColor }}>
                  {item.content}
                </Text>
                <Text style={{ ...p, color: bodyTextColor }}>{item.price}</Text>
              </div>
            </Column>
          ))}
        </Row>

        <Row style={row}>
          {row2Data.map((item, index) => (
            <Column key={`row2-col-${index}`} style={{ ...rowItem }}>
              <div style={column}>
                <Img
                  style={polyImage}
                  src={item.imageUrl}
                  alt={item.imageAlt}
                ></Img>
                <Text style={{ ...H4 }}>{item.subTitle}</Text>
              </div>
              <div style={column2}>
                <Text style={{ ...p, ...borderBotton, color: bodyTextColor }}>
                  {item.content}
                </Text>
                <Text style={{ ...p, color: bodyTextColor }}>{item.price}</Text>
              </div>
            </Column>
          ))}
        </Row>

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
      </div>
    </Section>
  );
}

const section = {
  margin: "0 auto",
  padding: "50px 50px",
  textAlign: "center",
  display: "block",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "14px",
};

const Body = {
  backgroundColor: "#2d2d2d",
  padding: "50px 65px",
};

const row = {
  display: "flex",
  justifyContent: "center",
  padding: "20px 0px",
  flexWrap: "wrap",
};

const rowItem = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  paddingTop: "20px",
};

const column = {
  width: "30%",
  height: "auto",
  border: "1px solid #f0f0f0",
  borderRadius: "12px",
  padding: "10px",
};

const column2 = {
  width: "100%",
  height: "auto",
};

const polyImage = {
  width: "80px",
  height: "auto",
  display: "block",
  margin: "0 auto",
};

const H4 = {
  color: "#f0f0f0",
  fontSize: "18px",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "24px",
  letterSpacing: "-0.4px",
  textAlign: "center",
  marginTop: "10px",
};

const H3 = {
  color: "#f0f0f0",
  fontSize: "22px",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "34px",
  letterSpacing: "-0.4px",
  textAlign: "center",
  marginTop: "10px",
};

const H2 = {
  fontSize: "49px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "55px",
  letterSpacing: "-0.4px",
  textAlign: "center",
  marginTop: 0,
  padding: "29px 0",
};

const p = {
  margin: "15px auto",
  fontSize: "16px",
  fontStyle: "normal",
  lineHeight: "24px",
  textAlign: "center",
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
  marginTop: "50px",
};

const borderBotton = {
  borderBottom: "1px solid #f0f0f0",
  width: "100%",
};
