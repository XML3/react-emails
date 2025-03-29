import { Section, Text, Img, Link } from "@react-email/components";
import React from "react";

type TitleProps = {
  imageUrl: string;
  title?: string;
  content?: string;
  buttonText?: string;
  buttonHref?: string;
  bodyBackgroundColor?: string;
  buttonTextColor?: string;
  buttonBackgroundColor?: string;
  bodyTextColor?: string;
  imageAlt: string;
  children?: React.ReactNode;
  textAlignmentCenter?: boolean;
};

export default function RectImage({
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
  children,
  textAlignmentCenter,
}: TitleProps) {
  // Conditionally set padding values for the body section
  const sectionStyle = {
    ...section,
    padding: title || content ? "0 60px" : "0", // Conditionally add padding
    textAlign: textAlignmentCenter ? "center" : "left",
  };

  // Container for the image and overlay text
  const imageContainerStyle = {
    position: "relative",
    display: "block",
    width: "100%",
    height: "auto",
    overflow: "hidden",
  };

  // Image style
  const imageStyle = {
    width: "100%",
    height: "auto",
    objectFit: "cover",
  };

  // Title and content text styles (absolutely positioned) Some email clients will render the Text below the image
  const titleStyle = {
    ...H2,
    color: bodyTextColor,
    textAlign: textAlignmentCenter ? "center" : "left",
    position: "absolute",
    left: "50%",
    top: "10%",
    transform: "translate(-50%, -50%)",
    zIndex: 1,
  };

  const contentStyle = {
    ...p,
    color: bodyTextColor,
    textAlign: textAlignmentCenter ? "center" : "left",
    position: "absolute",
    top: "61%",
    left: "72%",
    transform: "translateX(-45%)",
    zIndex: 1,
  };

  const childrenStyle = {
    ...text,
    textAlign: textAlignmentCenter ? "center" : "left",
  };

  return (
    <Section style={{ ...Body, backgroundColor: bodyBackgroundColor }}>
      <div style={imageContainerStyle}>
        <Img alt={imageAlt} style={imageStyle} src={imageUrl} width={600} />

        {title && (
          <Text
            style={{
              ...titleStyle,
              color: bodyTextColor,
              fontSize: "49px !important",
            }}
          >
            {title}
          </Text>
        )}

        {content && (
          <Text
            style={{
              ...contentStyle,
              fontSize: "22px !important",
              color: bodyTextColor,
            }}
          >
            {content}
          </Text>
        )}
      </div>

      <div style={sectionStyle}>
        {/* Conditionally render children */}
        {children && <div style={childrenStyle}>{children}</div>}
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
    </Section>
  );
}

const section = {
  padding: "0 60px",
};

const text = {
  color: "black",
  fontSize: "22px !important",
  fontWeight: 400,
  lineHeight: "32px",
  marginBottom: "20px",
};

const Body = {
  padding: "60px 60px 60px",
};

const H2 = {
  color: "#2d2d2d",
  fontSize: "49px !important",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "55px",
  letterSpacing: "-0.4px",
  textAlign: "left",
  marginTop: 0,
};

const p = {
  fontSize: "22px",
  fontStyle: "normal",
  lineHeight: "32px",
  textAlign: "center",
  width: "50%",
  margin: "30px auto",
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
};
