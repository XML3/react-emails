import { Body, Html, Container, Head } from "@react-email/components";
import React from "react";
import IntroComponent from "../components/content-blocks/IntroComponent";
import SplitImage from "../components/content-blocks/SplitImage";
import ImageOverlay from "../components/content-blocks/ImageOverlay";
import PolygonCard from "../components/content-blocks/PolygonCard";
import ServiceList from "../components/content-blocks/ServiceList";
import HeroX from "../components/content-blocks/HeroX";
import RobotoFont from "../components/fonts/RobotoFont";
import ClosingMessage from "../components/content-blocks/ClosingMessage";
import Footer from "../components/content-blocks/Footer";

export default function HenryMore() {
  return (
    <Html>
      <Head>
        <RobotoFont />
      </Head>
      <Body style={{ background: "#0f0f0f", fontFamily: "Roboto, sans-serif" }}>
        <Container>
          <HeroX
            title="Elevate Your Sound & Mix in 2025!"
            preContent="Have your music ready for distribution. Proper preparation ensures your music makes an impact, whether it's for streaming, labels, or digital stores. Every detail matters! "
            preContentColor="#f0f0f0"
            titleColor="#FFDD00"
            logoLink="https://soundcloud.com/henrymore"
            imageUrl="https://i.ibb.co/v1ybYrc/pexels-didsss-1300578.jpg"
            imageAlt="Vinyl on top of table"
            link="https://soundcloud.com/henrymore"
          />
          <IntroComponent
            title="Boost your sound!"
            buttonBackgroundColor="#E50046"
            buttonText="EXPERIENCE MY WORK HERE"
            buttonTextColor="#f0f0f0"
            buttonHref="https://soundcloud.com/henrymore/in-d-in"
          >
            <span>
              <p
                style={{
                  color: "#f0f0f0",
                  textAlign: "center",
                  lineHeight: "30px",
                }}
              >
                Get your music projects polished and ready for distribution with
                professional-quality sound. Whether you're mixing, mastering, or
                fine-tuning your tracks, I’ll help you boost your sound and
                ensure your music stands out, ready to be shared with the world!
              </p>
            </span>
          </IntroComponent>
          <SplitImage
            bodyBackgroundColor="#E50046"
            imageUrl="https://i.ibb.co/gFV13vCb/chopped-Mixer.png"
            imageAlt="Sound mixing board"
            title="Master Your Sound with Professional Mixing Techniques"
            content="I specialize in crafting the perfect mix for your music. As a skilled sound engineer, I use the latest techniques and cutting-edge tools to ensure every track achieves the clarity, depth, and balance it deserves. From precise EQ adjustments to dynamic range control, I bring out the best in your music. Let me help you elevate your sound and prepare your project for distribution with the expertise it deserves!"
            bodyTextColor="#f0f0f0"
            titleTextColor="#f0f0f0"
            buttonBackgroundColor="#2d2d2d"
            buttonText="GET A QUOTE"
            buttonTextColor="#f0f0f0"
            buttonHref="https://www.instagram.com/henrymoremusic/"
          />
          <ImageOverlay
            imageUrl="https://i.ibb.co/Pv0B1VbS/studio.jpg"
            imageAlt=""
            bodyBackgroundColor="#025955"
            title="About Me"
            content="Hi, I’m Henry More, a sound engineer. Over the years, I’ve had the privilege of working on various high-profile projects for leading streaming platforms such as Netflix, Amazon, and Hulu, as well as for Discovery Channel and other global distribution networks."
            bodyTextColor="#f0f0f0"
          />
          <PolygonCard
            imageUrl="https://i.ibb.co/kVhVRNsf/courses2.png"
            imageAlt="Woman Mixing Sound"
            title="Unlock Your Full Potential with My Sound Mixing Course!"
            content="Ready to take your mixing skills to the next level? Whether you're a beginner or looking to refine your techniques, this expert-led course is designed to help you master the art of sound mixing. Learn the latest techniques, tips, and tricks used by professionals, and gain hands-on experience with industry-standard tools. Join now and start creating mixes that stand out—your journey to becoming a top-tier sound engineer starts here!"
            cardBackgroundColor="#2d2d2d"
            titleFontSize="40px"
            cardMarginTop="50px"
            buttonBackgroundColor="#000"
            buttonHref=""
            buttonText="COMING SOON!"
            buttonTextColor="#f0f0f0"
          />

          <ServiceList
            title="Provided Services"
            titleColor="#f0f0f0"
            smallTitle="Sound Mixing Services"
            bodyTextColor="#f0f0f0"
            bodyBackgroundColor="#000"
            row1Data={[
              {
                imageUrl: "https://i.ibb.co/KpWdcWFL/polugons-Sound.png",
                imageAlt: "Engineer",
                subTitle: "Audio Engineering",
                content: "Recording, Editing, Mixing, Basic Effects",
                price: "$40 - $70/hour",
              },
              {
                imageUrl: "https://i.ibb.co/24C2Tyb/Edit-Sound.png",
                imageAlt: "Audio Desk setup, Editing",
                subTitle: "Audio Editing",
                content:
                  "Audio clip arrangement, cleaning up noise, timing adjustments",
                price: "$40 - $75/hour",
              },
              {
                imageUrl: "https://i.ibb.co/XktMHkmZ/Mixing-Poly.png",
                imageAlt: "Sound Engineer Mixing",
                subTitle: "Mixing",
                content:
                  "Track Balancing, EQ, Compression, Spatial Enhancement",
                price: "$90 - $150/hour",
              },
            ]}
            row2Data={[
              {
                imageUrl: "https://i.ibb.co/yFG8Jk2t/Master-Sound.png",
                imageAlt: "Mastering Sound",
                subTitle: "Mastering",
                content:
                  "Dynamic Range Enhancement, Stereo Imaging, Format Conversion",
                price: "$60 - $100/hour",
              },
              {
                imageUrl: "https://i.ibb.co/35Hqpmrn/Inter-Sound.png",
                imageAlt: "Sound Desing Software Image",
                subTitle: "Sound Design",
                content:
                  "Sound Effects Creating, Foley, Ambient Noise Enhancement",
                price: "$400 - $800/hour",
              },
              {
                imageUrl: "https://i.ibb.co/ccHwf4Kg/micro-Sound.png",
                imageAlt: "Studio Microphone",
                subTitle: "Recording Sessions",
                content:
                  "Setup and recording time in a control studio enviroment",
                price: "$50 - $100/hour",
              },
            ]}
            buttonBackgroundColor="#2d2d2d"
            buttonTextColor="#f0f0f0"
            buttonText="CONTACT ME"
            buttonHref="https://www.instagram.com/henrymoremusic/"
          />
          {/* <Socials /> */}
          <ClosingMessage>
            <span>
              Let’s work together to make your sound unforgettable!
              <br /> <br />
              Feel free to reach out and discuss how I can assist you with your
              next project. I look forward to collaborating with you soon!
              <br /> <br />
              Best regards,
              <br />
              Henry More Sound Engineer & Music Producer
            </span>
          </ClosingMessage>
          <Footer logoLink={"https://www.instagram.com/henrymoremusic"} />
        </Container>
      </Body>
    </Html>
  );
}
