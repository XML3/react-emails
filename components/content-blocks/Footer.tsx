import { Section, Text, Img, Column, Row, Link } from "@react-email/components";
import React from "react";

type footerProps = {
  logoLink: string;
};

export default function Footer({ logoLink }: footerProps) {
  return (
    <>
      <Section style={footer}>
        <Link href={logoLink}>
          <Img
            alt={"Henry More logo"}
            style={headerImage}
            width={"100%"}
            height={"auto"}
            src="https://i.ibb.co/FLkS6NN9/Henry-headert.png"
          />
        </Link>
      </Section>
      <Text style={footerText}>
        Copyright © 2025 Henry More, All rights reserved.
      </Text>
      <Text style={footerAt}>
        <a style={link} href={logoLink}>
          @Henry More
        </a>
      </Text>
      <Text style={footerText}>Designed & Developed by Xagly Montilva.</Text>
      <Text style={footerAt}>
        <a style={link} href={"https://www.xaglymontilva.com"}>
          @Xagly Montilva
        </a>
      </Text>
      <Row style={subFooter}>
        <Column>
          <Link href="https://www.instagram.com/henrymoremusic/">
            <Img
              src="https://i.ibb.co/vCC4V2qX/instagram-2016-logo-svgrepo-com.png"
              alt="Instagram logo"
              style={columnImg}
              width={40}
              height={40}
            />
          </Link>
        </Column>
        <Column>
          <Link href="https://soundcloud.com/henrymore">
            <Img
              src="https://i.ibb.co/zW8L7JVn/soundcloud-svgrepo-com-1.png"
              alt="Soundcloud logo"
              style={columnImg}
              width={40}
              height={40}
            />
          </Link>
        </Column>
        <Column>
          <Link href="https://www.facebook.com/Henrymoreramusic">
            <Img
              src="https://i.ibb.co/LXksLq9Y/facebook-svgrepo-com.png"
              alt="Facebook logo"
              style={columnImg}
              width={40}
              height={40}
            />
          </Link>
        </Column>
      </Row>
    </>
  );
}

const headerImage = {
  margin: "0 auto",
};

const columnImg = {
  margin: "0 auto",
};

const subFooter = {
  padding: "10px",
  backgroundColor: "#202020",
};
const footer = {
  backgroundColor: "#000",
  padding: "24px 0",
};
const link = {
  color: "#f0f0f0",
  textDecoration: "none",
  border: "1px solid #f0f0f0",
  borderRadius: "4px",
  padding: "10px 85px",
};

const footerText = {
  backgroundColor: "#2d2d2d",
  color: "#f0f0f0 !important",
  textAlign: "center",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "22px",
  padding: "20px 60px 20px 60px",
};
const footerAt = {
  color: "#f0f0f0 !important",
  textAlign: "center",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: 500,
  padding: "10px 60px 10px 60px",
};
